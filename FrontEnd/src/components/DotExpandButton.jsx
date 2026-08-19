import React from "react";
import { FiArrowRight } from "react-icons/fi";

const DotExpandButton = () => {
  return (
    <section className="h-20 w-full flex justify-center items-center">
      <div className="grid place-content-center py-5">
        <button className="group flex h-10 items-center gap-2 rounded-full border border-white text-white bg-black pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-neutral-200 hover:pl-2 hover:text-black active:bg-neutral-700 hover:border hover:border-white">
          <span className="rounded-full bg-white p-1 text-sm transition-colors duration-300 group-hover:bg-black ">
            <FiArrowRight className="translate-x-[-200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-white group-active:-rotate-45" />
          </span>
          <span className="group-active:text-white/80">Explore Inventory</span>
        </button>
      </div>
    </section>
  );
};

export default DotExpandButton;