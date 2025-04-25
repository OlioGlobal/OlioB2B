// components/Header.jsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed  top-0 left-0 w-full py-4    border-[1px] border-[#E4E4E42B] transition-all duration-300 z-50 ${
        scrolled ? "bg-[#FFFFFF] shadow-md" : "bg-transparent "
      }`}
    >
      <div className="flex max px-[5%] justify-between items-center">
        <div className=" logo flex items-center">
          <Link href="/" className="flex items-center">
            {scrolled ? (
              <Image
                src="/icon/logo2.png"
                alt="Cti Logo"
                width={120}
                height={40}
                className="h-12 w-auto"
              />
            ) : (
              <Image
                src="/icon/olio.png"
                alt="Cti Logo"
                width={120}
                height={40}
                className="h-12 w-auto"
              />
            )}
          </Link>
        </div>

        <div className="flex items-center gap-5 ">
          <nav className="hidden md:flex items-center ">
            <Link
              href="#features"
              className={`  para font-semibold  ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Take Free Audit
            </Link>
          </nav>
          <Link href="/contact" className=" text-white btn para  ">
            Connect with Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
