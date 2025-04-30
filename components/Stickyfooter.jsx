import React, { useState } from "react";
import Image from "next/image"; // Import the Image component from Next.js
import Link from "next/link"; // Import the Link component from Next.js
import LeadFormPopup from "./others/LeadFormPopup";

const StickyFooter2 = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      <div
        onClick={openPopup}
        className="fixed bottom-0 left-0 w-full bg-[#ffffff] text-white sm:hidden z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.2)] cursor-pointer"
      >
        <div className="flex items-center justify-between gap-4 px-[5%] p-2">
          <div
            onClick={(e) => e.stopPropagation()} // Prevent popup from opening when clicking icons
            className="flex gap-4"
          >
            <Link
              href="https://wa.me/918082714599?text=Book%20a%20FREE%2030-Minute%20Consultation%20Session"
              target="_blank"
              passHref
            >
              <div className="bg-white  rounded-full shadow-md hover:scale-105 transition-transform">
                <Image
                  src="/icon/whatsapp.png"
                  alt="WhatsApp"
                  width={40}
                  height={40}
                />
              </div>
            </Link>

            <Link href="tel:+919930999834" passHref>
              <div className="bg-white  rounded-full shadow-md hover:scale-105 transition-transform">
                <Image
                  src="/icon/phone.png"
                  alt="Phone"
                  width={40}
                  height={40}
                />
              </div>
            </Link>
          </div>
          <div className="btn para">Book My Free Session</div>
        </div>
      </div>

      <div className="hidden sm:flex flex-col fixed bottom-4 left-4 gap-2 z-50">
        <Link
          href="https://wa.me/918082714599?text=Book%20a%20FREE%2030-Minute%20Consultation%20Session"
          target="_blank"
          passHref
        >
          <div className="bg-[#ffffff]  rounded-full shadow-lg hover:scale-105 transform transition duration-200">
            <Image
              src="/icon/whatsapp.png"
              alt="WhatsApp"
              width={50}
              height={50}
            />
          </div>
        </Link>

        <Link href="tel:+919930999834" passHref>
          <div className="bg-[#ffffff]  rounded-full shadow-lg hover:scale-105 transform transition duration-200">
            <Image src="/icon/phone.png" alt="Phone" width={50} height={50} />
          </div>
        </Link>
      </div>

      <LeadFormPopup isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
};

export default StickyFooter2;
