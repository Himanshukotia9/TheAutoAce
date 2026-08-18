import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

const heroCar =
  "https://images.pexels.com/photos/9028761/pexels-photo-9028761.jpeg?auto=compress&cs=tinysrgb&w=1600";

export default function StoryBanner() {
  return (
    <div>
      <section
        aria-label="Featured car story"
        className="relative isolate w-full overflow-hidden rounded-none bg-neutral-950 text-neutral-50 shadow-2xl "
      >
        {/* Layout: stacked on mobile, split on tablet/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr] lg:grid-cols-[1.35fr_1fr]">
          {/* Image */}
          <div className="relative h-56 sm:h-72 md:h-105 lg:h-140">
            <img
              src={heroCar}
              alt="Dark metallic sports coupe on a wet mountain road at dusk"
              width={1920}
              height={1088}
              className="h-full w-full object-cover object-center"
            />
            {/* Gradient blend: vertical on mobile, horizontal from md up */}
            <div
              aria-hidden
              className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/30 to-transparent md:bg-linear-to-r md:from-transparent md:via-neutral-950/10 md:to-neutral-950"
            />
          </div>

          {/* Story panel */}
          <div className="relative flex flex-col justify-center gap-3 px-6 pb-8 pt-2 sm:px-8 sm:pb-10 md:gap-4 md:px-10 md:py-12 lg:gap-5 lg:px-14">
            <spam className="flex text-[0.65rem] font-semibold items-center gap-3 uppercase tracking-[0.3em] text-neutral-400 sm:text-xs">
              <span className="h-px w-5 sm:w-10 bg-neutral-400" />
              Kinetic Stillness
            </spam>
            <h1 className="text-balance text-2xl font-black leading-[1.05] tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
              The road remembers
              <span className="block text-neutral-400">every turn you take.</span>
            </h1>
            <p className="max-w-prose text-pretty text-sm leading-relaxed text-neutral-300 sm:text-base lg:text-lg">
              Built for the hour between dusk and dark, when the asphalt cools
              and the engine finally speaks in its own voice. No crowds, no
              clock — just a machine, a corner, and the quiet certainty of
              momentum.
            </p>
            <div className="mt-2 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:flex-wrap sm:gap-6">
              <Button href="/about" name="Read the story"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
