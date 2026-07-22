import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export default function LogoHeader() {
  return (
    <header className="text-gray-600 bg-black body-font">
      <div className="container mx-auto flex justify-around flex-wrap p-2 flex-row items-center">
        <a href="https://www.instagram.com/theautoace.ca?igsh=MXo1OXAyb2MycnJ6&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer">
          <button
            className="relative overflow-hidden flex items-center justify-center gap-x-2 sm:gap-x-3 bg-black text-white border border-white rounded-full px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base w-full sm:w-auto cursor-pointer group transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-x-2 sm:gap-x-3">
              <FaInstagram className="text-sm sm:text-base" />
              <p>Instagram</p>
            </span>

            {/* shimmer */}
            <span
              className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-gray-300/40 to-transparent group-hover:translate-x-full transition-transform duration-700"
            ></span>
          </button>
        </a>
        <a className="flex title-font font-medium items-center text-gray-900 md:mb-0">
          <img className="w-28 h-16" src="/Logo.png" alt="Logo" />
        </a>
        <a href="tel:+918284959177">
          <button
            className="relative overflow-hidden flex items-center justify-center gap-x-2 sm:gap-x-3 bg-black text-white border border-white rounded-full px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base w-full sm:w-auto cursor-pointer group transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-x-2 sm:gap-x-3">
              <FaPhoneAlt className="text-sm sm:text-base" />
              <p>Call Us</p>
            </span>

            {/* shimmer */}
            <span
              className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-gray-300/40 to-transparent group-hover:translate-x-full transition-transform duration-700"
            ></span>
          </button>
        </a>
      </div>
    </header>
  );
}
