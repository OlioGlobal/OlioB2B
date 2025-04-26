import { logLeadSubmission } from "../../../utils/logger";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  try {
    const formData = req.body;
    logLeadSubmission(formData);
    await new Promise((r) => setTimeout(r, 1000));
    return res.status(200).json({ success: true, id: formData.uniqueId });
  } catch (error) {
    console.error("Error in submit-lead:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
