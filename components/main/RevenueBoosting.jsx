import React from "react";
import Image from "next/image";
import { useState } from "react";
import LeadFormPopup from "../others/LeadFormPopup";
const RevenueBoostingCard = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  const data = [
    {
      id: "01",
      text: "A strong and trustworthy online presence = less skepticism upfront.",
    },
    {
      id: "02",
      text: "Procurement teams and other buyers reach out already understanding your value.",
    },
    {
      id: "03",
      text: "No more racing to the bottom against cheap competitors.",
    },
  ];

  return (
    <>
      <div className="px-[5%] max rm rounded-[10px]">
        <div
          className="rounded-[10px] p-4 py-10 sm:p-8 md:p-16 flex flex-col justify-center items-center text-white bg-cover bg-center"
          style={{ backgroundImage: "url('/icon/bg.png')" }}
        >
          <div
            className="p-2 rounded-xl mb-6 flex items-center justify-center"
            style={{
              background:
                "linear-gradient(141.87deg, #2B1C1C 21.99%, #53142E 79.67%)",
              boxShadow: "0px 0px 109.9px 15px #EA345CC7",
            }}
          >
            <Image src="/icon/star.png" width={40} height={40} alt="star" />
          </div>

          <h2 className="h2t text-center leading-[135%]">
            The "Revenue Boosting" Secret <br />
            <span className="text-[#EE314E]">Top 1% Manufacturers Use</span>
          </h2>

          <div className="mt-8 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {data.map((item, index) => (
              <div key={index} className="flex flex-col space-y-3">
                <span className="text-[#EE314E] font-medium para">
                  {item.id}
                </span>
                <p className="para text-[#FFFFFF]">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-14">
            <button onClick={openPopup} className="para btn">
              Book My Free Session
            </button>
          </div>
        </div>
      </div>
      <LeadFormPopup isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
};

export default RevenueBoostingCard;
