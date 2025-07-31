import nodemailer from "nodemailer";

const ZOHO_TOKEN_URL = "https://accounts.zoho.com/oauth/v2/token";
const ZOHO_CRM_BASE_URL =
  process.env.ZOHO_API_BASE || "https://www.zohoapis.com";
const ZOHO_SCOPE = "ZohoCRM.modules.ALL";

async function getZohoAccessToken() {
  const params = new URLSearchParams({
    grant_type: "refresh_token",
    client_id: process.env.ZOHO_CLIENT_ID,
    client_secret: process.env.ZOHO_CLIENT_SECRET,
    refresh_token: process.env.ZOHO_REFRESH_TOKEN,
  });
  const resp = await fetch(`${ZOHO_TOKEN_URL}?${params}`, { method: "POST" });
  if (!resp.ok) {
    const err = await resp.text();
    console.error("[Zoho OAuth Error]", err);
    throw new Error("Failed to refresh Zoho access token");
  }
  const { access_token } = await resp.json();
  return access_token;
}

async function createZohoLead(accessToken, form) {
  const payload = {
    data: [
      {
        Last_Name: form.name || "Unknown",
        Company: form.businessName || "",
        Email: form.email || "",
        Website: form.websiteUrl || "",
        Mobile: form.phone || "",
        unique_id1: form.uniqueId || "",
        Contact_Us_Page_Name: "B2B Page",

        utm_source: form.utm?.utm_source || "",
        utm_medium: form.utm?.utm_medium || "",
        utm_campaign: form.utm?.utm_campaign || "",
        utm_term: form.utm?.utm_term || "",
        adgroup: form.utm?.utm_adgroup || "",
        utm_adgroupname: form.utm?.utm_adgroupname || "",
        utm_campaignname: form.utm?.utm_campaignname || "",
      },
    ],
  };

  console.log("[Zoho Payload]", JSON.stringify(payload, null, 2));

  const resp = await fetch(`${ZOHO_CRM_BASE_URL}/crm/v2/Leads`, {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!resp.ok) {
    const err = await resp.text();
    console.error("[Zoho CRM Error]", err);
    throw new Error("Zoho CRM lead creation failed");
  }
  return resp.json();
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST allowed" });
  }

  const form = req.body;

  // Send to Google Sheets
  try {
    const flattenedForm = {
      ...form,
      ...(form.utm || {}),
      action: "submit-lead",
    };

    delete flattenedForm.utm;
    console.log(form);

    const sheetResp = await fetch(process.env.GS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(flattenedForm),
    });
    if (!sheetResp.ok) {
      console.error("[Sheets Error]", await sheetResp.text());
      throw new Error("Failed to log to Sheets");
    }
  } catch (err) {
    console.error("[Sheets Error]", err);
    // Don't return here, continue with Zoho and email
  }

  // Create Zoho Lead
  try {
    const token = await getZohoAccessToken();
    const zohoResult = await createZohoLead(token, form);

    const status = zohoResult?.data?.[0]?.code;
    const zohoId = zohoResult?.data?.[0]?.details?.id;

    if (status !== "SUCCESS") {
      console.error(
        "[Zoho Error Response]",
        JSON.stringify(zohoResult, null, 2)
      );
      // Don't return error, continue with email
    }

    // Send Email Notification
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: `Olio B2B <${process.env.EMAIL_USER}>`,
        to: "info@olioglobaladtech.com",
        subject: "📣 New Lead from Olio B2B",
        bcc: "olioclientwebsiteleads@gmail.com",
        cc: [
          "siddhesh@olioglobaladtech.com",
          "amol@olioglobaladtech.com",
          "shaun@olioglobaladtech.com",
        ],
        text: `Name: ${form.name || "N/A"}

Email: ${form.email || "N/A"}

Phone: ${form.phone || "N/A"}

Business: ${form.businessName || "N/A"}

Website: ${form.websiteUrl || "N/A"}

UTM Details:
- Source: ${form.utm?.utm_source || "N/A"}
- Medium: ${form.utm?.utm_medium || "N/A"}
- Campaign: ${form.utm?.utm_campaignname || form.utm?.utm_campaign || "N/A"}
- Ad Group: ${form.utm?.utm_adgroupname || "N/A"}
- Term: ${form.utm?.utm_term || "N/A"}

Unique ID: ${form.uniqueId || "N/A"}`,
      });
    } catch (emailErr) {
      console.error("[Email Error]", emailErr);
    }

    return res.status(200).json({
      success: true,
      zohoId,
      uniqueId: form.uniqueId,
    });
  } catch (err) {
    console.error("[Zoho Error]", err);

    // Still try to send email even if Zoho fails
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: `Olio B2B <${process.env.EMAIL_USER}>`,
        to: "info@olioglobaladtech.com",
        subject: "📣 New Lead from Olio B2B (Zoho Failed)",
        bcc: "olioclientwebsiteleads@gmail.com",
        cc: [
          "siddhesh@olioglobaladtech.com",
          "amol@olioglobaladtech.com",
          "shaun@olioglobaladtech.com",
        ],
        text: `Name: ${form.name || "N/A"}

Email: ${form.email || "N/A"}

Phone: ${form.phone || "N/A"}

Business: ${form.businessName || "N/A"}

Website: ${form.websiteUrl || "N/A"}

UTM Details:
- Source: ${form.utm?.utm_source || "N/A"}
- Medium: ${form.utm?.utm_medium || "N/A"}
- Campaign: ${form.utm?.utm_campaignname || form.utm?.utm_campaign || "N/A"}
- Ad Group: ${form.utm?.utm_adgroupname || "N/A"}
- Term: ${form.utm?.utm_term || "N/A"}

Unique ID: ${form.uniqueId || "N/A"}

Note: Zoho CRM integration failed, but lead data captured via email.`,
      });
    } catch (emailErr) {
      console.error("[Email Error]", emailErr);
    }

    return res.status(500).json({
      message: "Lead processing failed",
      error: err.message,
      uniqueId: form.uniqueId,
    });
  }
}
