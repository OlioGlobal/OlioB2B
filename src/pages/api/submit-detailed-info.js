const ZOHO_TOKEN_URL = "https://accounts.zoho.com/oauth/v2/token";
const ZOHO_CRM_BASE_URL =
  process.env.ZOHO_API_BASE || "https://www.zohoapis.com";

async function getZohoAccessToken() {
  console.log("[Zoho] Fetching access token…");
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
  console.log("[Zoho] Got access token");
  return access_token;
}

async function findZohoLead(accessToken, uniqueId) {
  console.log(`[Zoho] Searching for Lead with Unique_ID == ${uniqueId}`);
  const rawCriteria = `(unique_id1:equals:${uniqueId})`;
  const criteria = encodeURIComponent(rawCriteria);
  const url = `${ZOHO_CRM_BASE_URL}/crm/v2/Leads/search?criteria=${criteria}`;
  const resp = await fetch(url, {
    headers: { Authorization: `Zoho-oauthtoken ${accessToken}` },
  });

  if (!resp.ok) {
    const text = await resp.text();
    console.error("[Zoho Update Error]", text);
    throw new Error("Failed to update Zoho Lead");
  }

  const body = await resp.json();
  const lead = body.data?.[0] || null;
  console.log(
    lead
      ? `[Zoho] Found existing Lead (id=${lead.id})`
      : "[Zoho] No Lead found for that Unique_ID"
  );
  return lead;
}

async function updateZohoLead(accessToken, recordId, form) {
  console.log(`[Zoho] Updating Lead ${recordId} with new details`);
  const payload = {
    data: [
      {
        id: recordId,
        Website_URL: form.websiteUrl,
        Urgency_Level: form.urgency,
        Challenges: form.challenges,
      },
    ],
  };

  const resp = await fetch(`${ZOHO_CRM_BASE_URL}/crm/v2/Leads`, {
    method: "PUT",
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!resp.ok) {
    const err = await resp.text();
    console.error("[Zoho Update Error]", err);
    throw new Error("Failed to update Zoho Lead");
  }

  const result = await resp.json();
  console.log("[Zoho] Update successful:", result);
  return result;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    console.log("[API] Bad method:", req.method);
    return res.status(405).json({ message: "Only POST allowed" });
  }

  console.log("[API] Payload received:", req.body);
  const form = req.body;

  let token;
  try {
    token = await getZohoAccessToken();
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }

  let lead;
  try {
    lead = await findZohoLead(token, form.uniqueId);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }

  if (!lead) {
    console.warn(`[API] No existing lead for uniqueId=${form.uniqueId}`);
    return res.status(404).json({ message: "Lead not found" });
  }

  try {
    await updateZohoLead(token, lead.id, form);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }

  console.log("[API] Done updating lead.");
  return res.status(200).json({ success: true, id: lead.id });
}
