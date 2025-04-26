// pages/thank-you.js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useFormContext } from "../../context/FormContext";
import Head from "next/head";

export default function ThankYouPage() {
  const router = useRouter();
  const { id } = router.query;
  const { formData, updateFormData } = useFormContext();

  const [details, setDetails] = useState({
    websiteUrl: "",
    urgency: "",
    challenges: [],
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  // Redirect back home if ID is missing/mismatched
  useEffect(() => {
    if (router.isReady && (!id || formData.uniqueId !== id)) {
      router.push("/");
    }
  }, [router, id, formData]);

  const handleDetailChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setDetails((prev) => {
        const set = new Set(prev.challenges);
        if (checked) set.add(value);
        else set.delete(value);
        return { ...prev, challenges: [...set] };
      });
    } else {
      setDetails((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    const errs = {};
    // URL validation
    if (!details.websiteUrl.trim()) {
      errs.websiteUrl = "Website URL is required";
    } else {
      try {
        new URL(details.websiteUrl);
      } catch {
        errs.websiteUrl = "Please enter a valid URL";
      }
    }
    // urgency (radio)
    if (!details.urgency) {
      errs.urgency = "Please select how urgent this is";
    }
    // challenges (checkbox)
    if (details.challenges.length === 0) {
      errs.challenges = "Please select at least one challenge";
    }
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) {
      setErrors(v);
      return;
    }
    setErrors({});
    setSubmitting(true);

    try {
      // store the extra details in context
      updateFormData(details);

      const res = await fetch("/api/submit-detailed-info", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uniqueId: formData.uniqueId,
          ...formData,
          ...details,
        }),
      });
      if (!res.ok) throw new Error("Network error");

      // clear everything so there's no stale state
      updateFormData({
        name: "",
        email: "",
        phone: "",
        businessName: "",
        websiteUrl: "",
        urgency: "",
        challenges: [],
      });

      setDone(true);
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  if (!formData.uniqueId) return <div>Loading…</div>;

  return (
    <div className="  py-20 mt-10">
      <Head>
        <title>Thank You | Lead Consultation</title>
      </Head>

      <div className=" px-[5%] max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
        <div className="flex flex-col mt-2">
          <p className="text-[#404A50] text-[24px] leading-[160%] font-semibold mb-4">
            Thank you for enquiring,{" "}
            <span className="font-medium">{formData.name}</span>. <br /> Lorem
            ipsum dolor is a dummy text.
          </p>
          <h1 className="h1t leading-[109.00000000000001%] text-[#211735] font-bold">
            Scale Your Sales Flow 10X Faster&ndash;Seamlessly!
          </h1>
          <p className="text-[#404A50] para mt-3">
            All information is kept strictly confidential.
          </p>
        </div>

        <div className="bg-white border-[1px] border-[#CBCBCB] rounded-lg px-4 py-4 lg:py-8 lg:px-6 shadow-sm">
          {done ? (
            <div className="text-center">
              <p className="text-2xl font-semibold text-gray-800 mb-4">
                🎉 Thank you!
              </p>
              <p className="text-gray-700">
                We ve received your details and will be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { label: "Full Name", value: formData.name },
                  { label: "Email", value: formData.email },
                  { label: "Business Name", value: formData.businessName },
                  { label: "Phone", value: formData.phone },
                ].map(({ label, value }, idx) => (
                  <div key={idx}>
                    <label className="block text-[14px] font-semibold text-[#253844] mb-1">
                      {label}
                    </label>
                    <input
                      readOnly
                      type="text"
                      value={value}
                      className="w-full pb-1 border-b-2 bg-gray-50 p-1 border-gray-300  text-gray-600 focus:outline-none"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-[14px] font-semibold text-[#253844] mb-1">
                  Website URL
                </label>
                <input
                  type="url"
                  name="websiteUrl"
                  value={details.websiteUrl}
                  onChange={handleDetailChange}
                  placeholder="https://example.com"
                  className="w-full pb-1 border-b-2 p-1  border-gray-300 focus:outline-none focus:border-gray-900"
                />
                {errors.websiteUrl && (
                  <p className="mt-1 text-red-500 text-sm">
                    {errors.websiteUrl}
                  </p>
                )}
              </div>

              <fieldset>
                <legend className="para font-semibold text-[#253844] mb-1">
                  How urgently do you need to fix your digital presence?
                </legend>
                {[
                  {
                    label: "Immediately — We’re losing deals",
                    value: "immediately",
                  },
                  {
                    label: "Within 3 months — Planning next growth",
                    value: "within3Months",
                  },
                  { label: "Just exploring options", value: "exploring" },
                ].map((opt, i) => (
                  <label
                    key={i}
                    className="flex items-center mb-1 para font-normal text-[#404A50]"
                  >
                    <input
                      type="radio"
                      name="urgency"
                      value={opt.value}
                      checked={details.urgency === opt.value}
                      onChange={handleDetailChange}
                      className="mr-2 h-4 w-4  accent-[#EE314E] focus:accent-[#EE314E]"
                    />
                    {opt.label}
                  </label>
                ))}
                {errors.urgency && (
                  <p className="mt-1  text-red-500 text-sm">{errors.urgency}</p>
                )}
              </fieldset>

              <fieldset>
                <legend className="para font-semibold text-[#253844] mb-1">
                  What’s your biggest marketing challenge right now?
                </legend>
                {[
                  {
                    label: "Our website isn’t generating leads",
                    value: "noLeads",
                  },
                  {
                    label: "Competitors outrank us on Google/LinkedIn",
                    value: "competitorsSEO",
                  },
                  {
                    label: "Lack of clear conversion funnel",
                    value: "noFunnel",
                  },
                ].map((opt, i) => (
                  <label
                    key={i}
                    className="flex items-center para text-[#253844] mb-1"
                  >
                    <input
                      type="checkbox"
                      name="challenges"
                      value={opt.value}
                      checked={details.challenges.includes(opt.value)}
                      onChange={handleDetailChange}
                      className="mr-2     h-4 w-4   accent-[#EE314E] focus:accent-[#EE314E]"
                    />
                    {opt.label}
                  </label>
                ))}
                {errors.challenges && (
                  <p className="mt-1 text-red-500 text-sm">
                    {errors.challenges}
                  </p>
                )}
              </fieldset>

              <fieldset>
                <legend className="para font-semibold text-[#253844] mb-1">
                  By submitting, you agree to:
                </legend>
                {[
                  {
                    label:
                      "A 30-min no-pitch strategy call with our growth team",
                  },
                  {
                    label:
                      "Receiving actionable insights (even if we don’t work together)",
                  },
                  {
                    label: "Our Privacy Policy (we hate spam too)",
                  },
                ].map((opt, i) => (
                  <ul
                    key={i}
                    className="flex  list-disc pl-5 items-center para  text-[#253844] "
                  >
                    <li className="text-[#404A50] para"> {opt.label}</li>
                  </ul>
                ))}
                {errors.challenges && (
                  <p className="mt-1 text-red-500 text-sm">
                    {errors.challenges}
                  </p>
                )}
              </fieldset>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="text-[#ffffff] btn para"
                >
                  {submitting ? "Submitting…" : "Apply Now"}
                </button>
                <p className="mt-4 text-sm text-pink-600">
                  Only 2 spots left this month
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
