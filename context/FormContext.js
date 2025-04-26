import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FormContext = createContext();

export function FormProvider({ children }) {
  const [formData, setFormData] = useState({
    uniqueId: "",
    name: "",
    email: "",
    phone: "",
    businessName: "",
    websiteUrl: "",
    urgency: "",
    challenges: [],
  });

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const generateUniqueId = () => {
    const uniqueId = uuidv4();
    updateFormData({ uniqueId });
    return uniqueId;
  };

  return (
    <FormContext.Provider
      value={{ formData, updateFormData, generateUniqueId }}
    >
      {children}
    </FormContext.Provider>
  );
}

export const useFormContext = () => useContext(FormContext);
