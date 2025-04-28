import React from "react";
import { useState } from "react";
import LeadFormPopup from "./others/LeadFormPopup";
const StickyFooter2 = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  return (
    <>
      <div
        onClick={openPopup}
        className="fixed bottom-0 left-0 w-full bg-[#EE314E] text-white text-center py-3 para font-semibold sm:hidden z-50 shadow-md cursor-pointer"
      >
        Book My Free Session
      </div>
      <LeadFormPopup isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
};

export default StickyFooter2;
