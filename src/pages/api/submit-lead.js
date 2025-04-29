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
        Mobile: form.phone || "",
        unique_id1: form.uniqueId || "",
        Contact_Us_Page_Name: "B2B Page",
      },
    ],
  };

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
    const sheetResp = await fetch(process.env.GS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, action: "submit-lead" }),
    });
    if (!sheetResp.ok) {
      console.error("[Sheets Error]", await sheetResp.text());
      throw new Error("Failed to log to Sheets");
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  try {
    const token = await getZohoAccessToken();
    await createZohoLead(token, form);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

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
      to: "olioclientwebsiteleads@gmail.com",
      subject: "📣 New Lead from Olio B2B",
      text: `Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Business: ${form.businessName}
Unique ID: ${form.uniqueId}`,
    });
  } catch (err) {
    console.error("[Email Error]", err);
  }

  return res.status(200).json({ success: true, id: form.uniqueId });
}
