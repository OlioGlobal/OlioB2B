// components/Header.jsx
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import LeadFormPopup from "./others/LeadFormPopup";

const Header = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const transparentPaths = ["/", "/landing", "/home-with-bg"];
  const isTransparentPage = transparentPaths.includes(router.pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bgClass =
    isTransparentPage && !scrolled ? "bg-transparent" : "bg-white shadow-md";

  const logoSrc =
    isTransparentPage && !scrolled ? "/icon/o2.png" : "/icon/logo2.png";

  const linkColor =
    isTransparentPage && !scrolled ? "text-white" : "text-[#253844]";

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full py-4 border-[1px] border-[#E4E4E42B] transition-all duration-300 z-50 ${bgClass}`}
      >
        <div className="flex max px-[5%] justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src={logoSrc}
              alt="Logo"
              width={120}
              height={40}
              className="h-12 w-auto"
            />
          </Link>

          <div className="flex items-center gap-5">
            <nav className="hidden md:flex items-center">
              <button
                onClick={openPopup}
                className={`para cursor-pointer font-semibold ${linkColor}`}
              >
                Take Free Audit
              </button>
            </nav>
            <button
              onClick={openPopup}
              className={`btn para text-[#ffffff]  bg-pink-500`}
            >
              Connect with Us
            </button>
          </div>
        </div>
      </header>
      <LeadFormPopup isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
};

export default Header;
