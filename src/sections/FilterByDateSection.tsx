import { useState } from "react";
import { getDates } from "../utils/utilsFunction";

function FilterByDateSection() {
  const [dates] =
    useState<{ day: string; date: string; offset: number }[]>(getDates());
  return (
    <div className="flex md:hidden relative pb-2">
      <div className="flex space-x-4 py-2 overflow-x-auto scrollbar-hidden snap-x snap-mandatory">
        {dates.map((d, i) => {
          const distance = Math.abs(d.offset);
          const opacity = Math.max(0.2, 1 - distance * 0.25);
          const colorClass =
            d.offset === 0 ? "text-secondary" : `text-[#DEDFE0]`;

          return (
            <div
              key={i}
              className={`flex flex-col space-y-0.5 snap-start min-w-15 text-center`}
              style={{ opacity }}
            >
              <p className={`text-xs ${colorClass}`}>{d?.day}</p>
              <p className={`text-xs  ${colorClass}`}>{d.date}</p>
            </div>
          );
        })}
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 p-1 rounded-l-md cursor-pointer">
        <img
          src="/calander.svg"
          alt="Calendar Icon"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}

export default FilterByDateSection;
