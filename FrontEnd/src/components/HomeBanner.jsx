import React from 'react'
import bmwImage from "/bmw.jpg";
import DotExpandButton from './DotExpandButton';

export default function HomeBanner() {
  return (
    <section className="relative flex h-116 w-full items-end justify-center overflow-hidden">
      <img
        src={bmwImage}
        alt="Vintage BMW at dusk"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/40" />
      <div className="relative z-10 mb-10 flex w-full justify-center px-4 sm:mb-14 md:mb-3">
        <DotExpandButton/>
      </div>
    </section>
  )
}
