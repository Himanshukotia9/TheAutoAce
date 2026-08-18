import React from "react";
import { ChevronRight, MapPin, Phone, Mail } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer className="border-t bg-black border-white/10 bg-ink-950 px-7 py-14 sm:px-12 lg:px-20">
        <div className="mx-auto grid max-w-5xl gap-12 sm:grid-cols-2">
          {/* Contact column */}
          <div>
            <h3 className="mb-6 text-xs text-white font-medium uppercase tracking-[0.3em] text-white">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.app.goo.gl/yxVmmkkAbAPUZKK79"
                  className="group flex items-center gap-3 text-white/70 transition-colors duration-300 hover:text-white"
                >
                  <MapPin className="h-4 w-4 text-white/70 transition-transform duration-300 group-hover:text-white group-hover:scale-110" />
                  <span className="text-sm">How to find us</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+18005550100"
                  className="group flex items-center gap-3 text-white/70 transition-colors duration-300 hover:text-white"
                >
                  <Phone className="h-4 w-4 text-white/70 transition-transform duration-300 group-hover:text-white group-hover:scale-110" />
                  <span className="text-sm">+91 82849 59177</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@theautoace.com"
                  className="group flex items-center gap-3 text-white/70 transition-colors duration-300 hover:text-white"
                >
                  <Mail className="h-4 w-4 text-white/70 transition-transform duration-300 group-hover:text-white group-hover:scale-110" />
                  <span className="text-sm">hello@theautoace.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Logo + Instagram column */}
          <div className="flex flex-col items-start sm:items-end">
            <div className="flex text-white/70 items-center gap-2.5">
              <a className="flex title-font font-medium items-center text-gray-900 md:mb-0">
                <img className="w-28 h-16" src="/Logo.png" alt="Logo" />
              </a>
            </div>
            <a
              href="https://www.instagram.com/theautoace.ca?igsh=MXo1OXAyb2MycnJ6&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center justify-center mt-6 gap-x-2 sm:gap-x-3 bg-black text-white border border-white rounded-full px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base w-full sm:w-auto cursor-pointer group transition-all duration-300 hover:bg-white hover:text-black">
                <span className="z-10 flex items-center gap-x-2 sm:gap-x-3">
                  <FaInstagram className="text-sm sm:text-base" />
                  <p>Instagram</p>
                </span>
              </button>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
