import Link from "next/link";
import Image from "next/image";
import LeadFormPopup from "../others/LeadFormPopup";
import { useState } from "react";

const Hero = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      <section className="relative min-h-screen w-full flex items-center">
        <div className="absolute inset-0 z-0">
          <video
            className="object-cover object-center w-full h-full"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster="/hero_bg.jpg"
          >
            <source src="/video/bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-[linear-gradient(270deg,_rgba(0,_0,_0,_0)_25.9%,_#000000_59.65%)]"></div>
        </div>

        <div className="z-10 max w-full lg:mt-10 px-[5%]">
          <div className="flex flex-col md:flex-row justify-between gap-0 md:gap-8">
            <div className="md:w-[50%] flex flex-col items-start gap-2 md:gap-10">
              <h1 className="h1t leading-[105%] text-[#ffffff]">
                3X Your Sales-Ready Lead Flow in 90 Days
              </h1>
              <p className="text-[24px] text-[#ffffff] leading-[160%] font-normal">
                Revenue-driven{" "}
                <span className="font-bold">
                  lead generation solutions for B2B machine manufacturers
                </span>{" "}
                (without cold calls)
              </p>
              <button
                onClick={openPopup}
                className="inline-block para btn text-[#ffffff]"
              >
                Connect with Us
              </button>
            </div>

            <div className="md:w-[50%] flex md:items-end md:justify-end gap-5">
              <div className="flex items-center justify-center bg-white/22 p-4 rounded-[10px] gap-4 mt-6 md:mt-0">
                <div className="flex items-center justify-center gap-4">
                  <Image
                    src="/icon/google.png"
                    alt="Google"
                    width={100}
                    height={40}
                    className=""
                  />
                  <Image
                    src="/icon/meta.png"
                    alt="Meta"
                    width={100}
                    height={40}
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LeadFormPopup isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
};

export default Hero;
