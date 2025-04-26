// utils/loggers.js

export function logLeadSubmission(data) {
  console.log("--- Lead Submission Received ---");
  console.log("Unique ID:   ", data.uniqueId);
  console.log("Name:        ", data.name);
  console.log("Email:       ", data.email);
  console.log("Phone:       ", data.phone);
  console.log("Business:    ", data.businessName);
  console.log("-------------------------------");
}

export function logDetailedSubmission(data) {
  console.log("--- Detailed Form Submission ---");
  console.log("Unique ID:    ", data.uniqueId);
  console.log("Website URL:  ", data.websiteUrl);
  console.log("Urgency:      ", data.urgency);
  console.log(
    "Challenges:   ",
    Array.isArray(data.challenges)
      ? data.challenges.join(", ")
      : data.challenges
  );
  console.log("-------------------------------");
}
