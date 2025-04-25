import React from "react";
import Image from "next/image";

const RevenueBoostingCard = () => {
  const data = [
    {
      id: "01",
      text: "How strong branding makes trust-building easier with engineers & procurement teams.",
    },
    {
      id: "02",
      text: "Why companies with authority close deals 3X faster (even at premium prices).",
    },
    {
      id: "03",
      text: 'How Our "Pre-Sell" framework works: Make clients come to you already convinced.',
    },
  ];

  return (
    <div className="px-[5%] max py-16 rounded-[10px]">
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
              <span className="text-[#EE314E] font-medium para">{item.id}</span>
              <p className="para text-[#FFFFFF]">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-14">
          <button className="para btn">Book My Free Session</button>
        </div>
      </div>
    </div>
  );
};

export default RevenueBoostingCard;
