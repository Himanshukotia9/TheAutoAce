import React from 'react'
import { ArrowRight } from 'lucide-react';
import Button from './Button';
const SALES_IMAGE =
  'https://images.pexels.com/photos/17632052/pexels-photo-17632052.jpeg?auto=compress&cs=tinysrgb&w=1600';
export default function CarsForSale() {
  return (
    <div>
      {/* Sales banner */}
      <section className="relative isolate w-full overflow-hidden rounded-none bg-ink-950 text-neutral-50 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.15fr] lg:grid-cols-[1fr_1.35fr]">
          {/* Text side */}
          <div className="order-2 md:order-1 relative flex flex-col justify-center gap-3 px-6 pb-8 pt-2 sm:px-8 sm:pb-10 md:gap-4 md:px-10 md:py-12 lg:gap-5 lg:px-14">
            <span className="flex text-[0.65rem] items-center gap-3 font-semibold uppercase tracking-[0.3em] text-white animate-fade-up sm:text-xs">
              <span className="h-px w-5 sm:w-10 bg-white" />
              Now Available
            </span>
            <h1 className="text-balance text-white text-2xl font-black leading-[1.05] tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
              Find your next
              <span className="block text-neutral-400">driving obsession.</span>
            </h1>
            <p className="max-w-prose text-pretty text-sm leading-relaxed text-neutral-300 sm:text-base lg:text-lg">
              Explore our curated collection of performance and luxury vehicles,
              each hand-selected and ready for its next chapter. Find the one
              that moves you.
            </p>
            <Button href="/inventory" name="Inventory" style="px-7 py-3.5"/>
          </div>

          {/* Image side */}
          <div className="order-1 md:order-2 relative h-56 sm:h-72 md:h-105 lg:h-140">
            <img
              src={SALES_IMAGE}
              alt="Luxury sports cars in a modern showroom"
              className="h-full w-full object-cover object-center motion-safe:animate-slow-zoom"
              loading="lazy"
            />
            <div
            aria-hidden
            className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/30 to-transparent md:bg-linear-to-r md:from-neutral-950 md:via-neutral-950/10 md:to-transparent"
          />
          </div>
        </div>
      </section>
    </div>
  )
}
