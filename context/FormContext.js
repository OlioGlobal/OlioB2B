"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_campaignname",
  "utm_adgroup",
  "utm_adgroupname",
  "utm_term",
];

const FormContext = createContext(null);

export function FormProvider({ children }) {
  const [formData, setFormData] = useState({
    uniqueId: "",
    name: "",
    email: "",
    phone: "",
    businessName: "",
    websiteUrl: "",
    utm: {},
    fullUrl: "",
    // Only the new fields (removed urgency and challenges)
    industry: "",
    marketingChallenge: "",
    marketingBudget: "below-1L", // Default to first option
    currentAgency: "",
    marketingGoal: "",
  });

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const generateUniqueId = () => {
    const uniqueId = uuidv4();
    updateFormData({ uniqueId });
    return uniqueId;
  };

  useEffect(() => {
    // Capture full URL with all parameters
    const fullUrl = window.location.href;

    // Extract UTM parameters
    const searchParams = new URLSearchParams(window.location.search);
    const utmData = {};
    UTM_KEYS.forEach((key) => {
      const value = searchParams.get(key);
      if (value) utmData[key] = decodeURIComponent(value);
    });

    // Update form data
    updateFormData({
      fullUrl,
      utm: utmData,
    });
  }, []);

  return (
    <FormContext.Provider
      value={{ formData, updateFormData, generateUniqueId }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
}
