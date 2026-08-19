import React from "react";
import { ArrowRight } from 'lucide-react';

export default function Button({href, name, style}) {
  return (
    <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
      <a
        href={href}
        className={`group text-white inline-flex items-center border border-white gap-3 bg-black ${style}  text-sm font-medium text-ink-950 transition-all duration-300 hover:bg-white hover:text-black`}
      >
        {name}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  );
}
