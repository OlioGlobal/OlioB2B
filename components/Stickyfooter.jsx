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
      {/* Mobile Button (Book Session) */}
      <div
        onClick={openPopup}
        className="fixed bottom-0 left-0 w-full bg-[#EE314E] text-white text-center py-3 para font-semibold sm:hidden z-50 shadow-md cursor-pointer"
      >
        Book My Free Session
      </div>

      {/* Desktop Sticky Footer with Phone and WhatsApp buttons */}
      <div className="hidden sm:flex flex-col fixed bottom-4 right-4 gap-2 z-50">
        {/* WhatsApp Button */}
        <Link href="https://wa.me/+919930999834" passHref>
          <div className="bg-[#ffffff] p-1 rounded-full shadow-lg hover:scale-105 transform transition duration-200">
            <Image
              src="/icon/whatsapp.png" // Replace with the correct path to your WhatsApp image
              alt="WhatsApp"
              width={40}
              height={40}
            />
          </div>
        </Link>

        {/* Phone Button */}
        <Link href="tel:+919930999834" passHref>
          <div className="bg-[#ffffff] p-1 rounded-full shadow-lg hover:scale-105 transform transition duration-200">
            <Image src="/icon/phone.png" alt="Phone" width={38} height={38} />
          </div>
        </Link>
      </div>

      {/* Lead Form Popup */}
      <LeadFormPopup isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
};

export default StickyFooter2;
