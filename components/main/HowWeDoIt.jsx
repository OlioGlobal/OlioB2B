// components/HowWeDoIt.jsx
"use client";
import { useState } from "react";
import Image from "next/image";

const HowWeDoIt = () => {
  // Define the FAQ items
  const faqItems = [
    {
      id: "01",
      question: "Make Buyers Find YOU First",
      answers: [
        "Get on Page 1 for keywords engineers & procurement teams actually search.",
        "Redesign so your expertise is obvious in 5 seconds.",
      ],
    },
    {
      id: "02",
      question: "Flood Your Pipeline with Ready-to-Buy Leads",
      answers: [
        "Get on Page 1 for keywords engineers & procurement teams actually search.",
        "Redesign so your expertise is obvious in 5 seconds.",
      ],
    },
    {
      id: "03",
      question: "Shorten Sales Cycles by 50%+",
      answers: [
        "Get on Page 1 for keywords engineers & procurement teams actually search.",
        "Redesign so your expertise is obvious in 5 seconds.",
      ],
    },
  ];

  // State to track which FAQ item is expanded
  const [expandedId, setExpandedId] = useState("01");

  // Toggle function for expanding/collapsing
  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-16 max bg-white px-[5%]">
      <div className=" flex flex-col gap-8  md:flex-row justify-between items-center">
        <div className="md:w-[50%] flex justify-start items-start">
          <Image
            src="/icon/how.png"
            alt="Machine manufacturers working"
            height={400}
            width={600}
            className="object-cover rounded-lg"
          />
        </div>

        <div className="md:w-[50%] justify-center items-center">
          <div>
            <h2 className="h2t  text-[#253844] leading-[147%] mb-8 ">
              How Do We Do It? <br className="hidden lg:block" /> Shorter Sales
              Cycles for <br className="hidden lg:block" />
              Machine Manufacturers
            </h2>

            {/* FAQ Accordion */}
            <div className="space-y-6">
              {faqItems.map((item) => (
                <div
                  key={item.id}
                  className="border-b border-[#00000026] cursor-pointer pb-4"
                  onClick={() => toggleExpand(item.id)}
                >
                  <button className="w-full flex items-start cursor-pointer justify-between text-left focus:outline-none">
                    <div className="flex items-start">
                      <h3 className="para2 text-[#253844] font-semibold">
                        {item.question}
                      </h3>
                    </div>
                    <span className="ml-2 flex-shrink-0">
                      <svg
                        className={`w-5 h-5 transform transition-transform duration-300 ${
                          expandedId === item.id ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`mt-2 transition-all duration-300 overflow-hidden ${
                      expandedId === item.id
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.answers.length > 0 ? (
                      <ul className="space-y-3 mt-2 list-none ">
                        {item.answers.map((answer, index) => (
                          <div key={index} className="flex gap-3">
                            <span className="para font-medium text-[#224DBA] ">
                              0{index + 1}
                            </span>
                            <li className="para text-[#404A50]">{answer}</li>
                          </div>
                        ))}
                      </ul>
                    ) : (
                      <p className="">More information coming soon.</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDoIt;
