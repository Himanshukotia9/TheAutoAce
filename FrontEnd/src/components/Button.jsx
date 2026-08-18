import React from "react";
import { ArrowRight } from 'lucide-react';

export default function Button({href, name}) {
  return (
    <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
      <a
        href={href}
        className="group text-white inline-flex items-center border border-white gap-3 bg-black px-7 py-3.5 text-sm font-medium text-ink-950 transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_8px_30px_-5px_rgba(255,255,255,0.75)]"
      >
        {name}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  );
}
