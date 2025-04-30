// components/ServicesSection.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    title: (
      <span>
        High-Conversion <br className="hidden md:block" />{" "}
        <span className="text-[#EE314E]">Website Redesign.</span>
      </span>
    ),
    description: (
      <span>
        <span className="text-[#253844] font-semibold">
          Your website loses buyers in 5 seconds if it looks outdated or vague.
        </span>{" "}
        <br />
        We build industry-specific sites that showcase your technical expertise,
        compliance standards, and ROI, so buyers trust you instantly.
      </span>
    ),
  },
  {
    id: "02",
    title: (
      <span>
        Organic <br className="hidden md:block" />{" "}
        <span className="text-[#EE314E]">Search Ranking.</span>
      </span>
    ),
    description: (
      <span>
        <span className="text-[#253844] font-semibold">
          If you’re not on Page 1 for engineering keywords, you’re invisible.
        </span>{" "}
        <br />
        Our SEO strategy targets phrases procurement teams search like
        “high-torque gearbox suppliers ISO 9001”.
      </span>
    ),
  },
  {
    id: "03",
    title: (
      <span>
        Performance-Driven <br className="hidden md:block" />{" "}
        <span className="text-[#EE314E]">PPC Marketing.</span>
      </span>
    ),
    description: (
      <span>
        <span className="text-[#253844] font-semibold">
          Generic ads burn budgets. Ours only target ready-to-buy engineers.
        </span>{" "}
        <br />
        PPC Ads optimized for B2B purchase intent with landing pages that
        convert 3× better than average.
      </span>
    ),
  },
  {
    id: "04",
    title: (
      <span>
        Technical <br className="hidden md:block" />{" "}
        <span className="text-[#EE314E]">Video Marketing.</span>
      </span>
    ),
    description: (
      <span>
        <span className="text-[#253844] font-semibold">
          Generic data-sheets can bore buyers. Demo videos engage better.
        </span>{" "}
        <br />
        We produce animations & plant walkthroughs with value-driven visual
        storytelling to shorten sales cycles.
      </span>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section className="rm px-[5%] max mx-auto">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="h2t text-[#253844] leading-[135%]">
          Poor Digital Presence Can Make <br /> You Lose 80% Lead Conversions.
          <br />
          <span className="text-[#808892]">Here’s How We Fix It!</span>
        </h2>
        <p className="mt-4 para font-normal text-[#404A50]">
          Olio Global AdTech offers B2B digital marketing services that make
          your online persona speak <br /> the language of engineers and
          procurement teams.
        </p>
      </motion.div>

      {/* Services List */}
      <div className="space-y-8">
        {services.map((svc, idx) => (
          <motion.div
            key={svc.id}
            className={`md:flex gap-5 md:items-start ${
              idx > 0 ? "pt-8 border-t border-[#D5D5D5]" : ""
            }`}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
          >
            <div className="md:w-1/3 flex-shrink-0 flex items-baseline">
              <span className="text-[#EE314E] para2 mr-4">{svc.id}</span>
              <h3 className="font-bold text-[#253844] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[160%]">
                {svc.title}
              </h3>
            </div>

            <div className="md:w-2/3 mt-4 md:mt-0">
              <p className="para text-[#404A50] leading-[160%]">
                {svc.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
