import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export default function LogoHeader() {
  return (
    <header className="text-gray-600 bg-black body-font">
      <div className="container mx-auto flex justify-around flex-wrap p-2 flex-row items-center">
        <a
          href="https://www.instagram.com/theautoace.ca?igsh=MXo1OXAyb2MycnJ6&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex items-center justify-center gap-x-2 sm:gap-x-3 bg-black text-white border border-white rounded-full px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base w-full sm:w-auto cursor-pointer group transition-all duration-300 hover:bg-white hover:text-black">
            <span className="z-10 flex items-center gap-x-2 sm:gap-x-3">
              <FaInstagram className="text-sm sm:text-base" />
              <p>Instagram</p>
            </span>
          </button>
        </a>
        <a className="flex title-font font-medium items-center text-gray-900 md:mb-0">
          <img
            className="w-28 h-16 sm:w-56 sm:h-28"
            src="/Logo.png"
            alt="Logo"
          />
        </a>
        <a href="tel:+918284959177">
          <button className="flex items-center justify-center gap-x-2 sm:gap-x-3 bg-black text-white border border-white rounded-full px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base w-full sm:w-auto cursor-pointer group transition-all duration-300 hover:bg-white hover:text-black">
            <span className="z-10 flex items-center gap-x-2 sm:gap-x-3">
              <FaPhoneAlt className="text-sm sm:text-base" />
              <p>Call Us</p>
            </span>
          </button>
        </a>
      </div>
    </header>
  );
}
