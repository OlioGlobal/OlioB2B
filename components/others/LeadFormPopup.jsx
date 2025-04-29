// components/LeadFormPopup.jsx
import { useState } from "react";
import { useRouter } from "next/router";
import { useFormContext } from "../../context/FormContext";

export default function LeadFormPopup({ isOpen, onClose }) {
  const router = useRouter();
  const { updateFormData, generateUniqueId } = useFormContext();
  const [values, setValues] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const errs = {};

    if (!values.name.trim()) errs.name = "Full Name is required";
    if (!values.businessName.trim())
      errs.businessName = "Business Name is required";

    if (!/\S+@\S+\.\S+/.test(values.email)) {
      errs.email = "Valid email required";
    }

    const cleanedPhone = values.phone.replace(/\D/g, ""); // Remove non-digits

    if (!cleanedPhone) {
      errs.phone = "Mobile number is required.";
    } else if (!/^\d{10}$/.test(cleanedPhone)) {
      errs.phone = "Mobile number must be exactly 10 digits";
    } else if (!/^[6-9]\d{9}$/.test(cleanedPhone)) {
      errs.phone = "Enter a valid Mobile number";
    }

    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) return setErrors(errs);

    setSubmitting(true);
    const uniqueId = generateUniqueId();
    const payload = { ...values, uniqueId };
    updateFormData(payload);

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "leadFormSubmissionSuccess",
        formId: "leadFormPopup",
      });
      onClose?.();
      router.push(`/thank-you?id=${uniqueId}`);
    } catch {
      setErrors({ submission: "Submission failed. Try again." });
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/10 bg-opacity-20 flex items-center justify-center z-50">
      <div className="bg-white mx-[4%] p-5 md:p-8 max-w-md w-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="para2 font-semibold text-[#253844]">
            Connect With Us
          </h2>
          <button
            onClick={onClose}
            type="button"
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} id="form">
          {[
            {
              name: "name",
              label: "Full Name",
              placeholder: "Enter Full Name",
            },
            {
              name: "businessName",
              label: "Business Name",
              placeholder: "Enter Business Name",
            },
            {
              name: "email",
              label: "Email",
              placeholder: "Enter Email",
              type: "email",
            },
            {
              name: "phone",
              label: "Mobile",
              placeholder: "Enter Mobile Number",
              type: "tel",
            },
          ].map(({ name, label, placeholder, type = "text" }) => (
            <div key={name} className="mb-5">
              <label className="block text-[14px] text-[#253844] font-semibold mb-2">
                {label}
              </label>
              <input
                type={type}
                name={name}
                id={name}
                value={values[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className={`w-full pb-1 border-b-2 focus:outline-none 
                  ${errors[name] ? "border-red-500" : "border-gray-400"}
                  focus:border-gray-800 placeholder-gray-400`}
              />
              {errors[name] && (
                <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
              )}
            </div>
          ))}

          {errors.submission && (
            <div className="mb-4 text-red-600">{errors.submission}</div>
          )}

          <button
            type="submit"
            id="sub"
            disabled={submitting}
            className=" btn para text-[#ffffff]"
          >
            {submitting ? "Submitting…" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
