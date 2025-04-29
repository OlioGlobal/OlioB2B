// components/LeadConsultation.jsx
import { useState } from "react";
import Image from "next/image";
import LeadFormPopup from "../others/LeadFormPopup";

export default function LeadConsultation() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const consultationData = {
    heading: "Let's Fix Your Lead Problem :",
    subheading: " Book a FREE 30-Minute Consultation Session",
    features: [
      {
        icon: "search",
        title: "Diagnosis",
        description: "Where buyers are slipping through your current system",
      },
      {
        icon: "template",
        title: "Blueprint",
        description: "Exact steps to get more qualified inquiries",
      },
      {
        icon: "chart",
        title: "Case Example",
        description:
          "How we helped businesses like yours get 3X business growth",
      },
    ],
    cta: "Schedule a Call",
    partners: [
      { name: "Google Partner", logo: "/icon/google.png" },
      { name: "Meta Business Partner", logo: "/icon/meta.png" },
    ],
  };

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div
      className="
    bg-[#253844]                       
    bg-[url('/icon/bg1.png')]        
    bg-cover                             
    bg-center                          
    bg-no-repeat                        
   rm
  "
    >
      <div className="text-white max px-[5%] w-full">
        <div className="mx-auto">
          <div className="mb-12">
            <h2 className="h2t leading-[135%]">
              {consultationData.heading}
              <br className="hidden md:block" />
              {consultationData.subheading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8 md:mb-12">
            {consultationData.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-2 md:gap-4 items-start"
              >
                {feature.icon === "search" && (
                  <Image
                    src="/icon/b1.png"
                    alt="Diagnosis"
                    width={30}
                    height={30}
                  />
                )}
                {feature.icon === "template" && (
                  <Image
                    src="/icon/b2.png"
                    alt="Blueprint"
                    width={30}
                    height={30}
                  />
                )}
                {feature.icon === "chart" && (
                  <Image
                    src="/icon/b3.png"
                    alt="Case Example"
                    width={30}
                    height={30}
                  />
                )}
                <p className="para font-semibold">{feature.title}</p>
                <p className="text-[#ffffff] font-normal leading-[160%]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start md:flex-row md:items-end md:justify-between">
            <button onClick={openPopup} className="para btn cursor-pointer">
              {consultationData.cta}
            </button>

            <div className="flex items-center bg-white/22 p-4 rounded-[10px] gap-4 mt-6 md:mt-0">
              {consultationData.partners.map((partner, idx) => (
                <div key={idx}>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={100}
                    height={40}
                    className=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <LeadFormPopup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
}
