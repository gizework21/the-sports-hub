import { CalendarRange, ChevronLeft, ChevronRight, Radio } from "lucide-react";
import { useState } from "react";
import Header from "../../components/common/Header";

function getDates() {
  const today = new Date();
  const tempDates = [];
  for (let i = -3; i <= 3; i++) {
    const d = new Date();
    d.setDate(today.getDate() + i);
    const day = d
      .toLocaleDateString("en-US", { weekday: "short" })
      .toUpperCase();
    const date = d
      .toLocaleDateString("en-US", { day: "2-digit", month: "short" })
      .toUpperCase();
    tempDates.push({ day, date, offset: i });
  }
  return tempDates;
}

function Fixtures() {
  const [dates] =
    useState<{ day: string; date: string; offset: number }[]>(getDates());

  return (
    <div className="flex flex-col w-full ">
      <Header />

      <div className="bg-background min-h-screen p-4 lg:px-72 md:py-4 flex flex-col space-y-4 w-full">
        <div className="hidden md:flex flex-col space-y-4">
          <h6 className="text-white text-xl">Macthes</h6>
          <div className="bg-cardBg px-4 py-3 flex justify-between items-center">
            <ChevronLeft className="text-white size-5" />
            <div className="flex space-x-2 items-center">
              <CalendarRange className="text-white size-5" />
              <h6 className="text-white">Today</h6>
            </div>
            <ChevronRight className="text-white size-5" />
          </div>
        </div>

        {/* mobile filter by date */}
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
                  className={`flex flex-col space-y-0.5 snap-start min-w-[60px] text-center`}
                  style={{ opacity }}
                >
                  <p className={`text-xs ${colorClass}`}>{d?.day}</p>
                  <p className={`text-xs  ${colorClass}`}>{d.date}</p>
                </div>
              );
            })}
          </div>

          {/* Calendar Icon */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 p-1 rounded-l-md cursor-pointer">
            <img
              src="/calander.svg"
              alt="Calendar Icon"
              className="cursor-pointer"
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="flex space-x-2 bg-secondary rounded-xl px-3 py-2 items-center cursor-pointer">
            <h6 className="text-black text-sm">All</h6>
            <div className="bg-background rounded-full size-4 text-secondary flex items-center justify-center">
              <h6 className="text-white text-xs">6</h6>
            </div>
          </div>
          <div className="flex space-x-2 bg-cardBg rounded-xl px-3 py-2 items-center cursor-pointer">
            <Radio className="text-white size-4" />
            <h6 className="text-white text-sm">Live</h6>
            <div className="bg-background rounded-full size-4 text-secondary flex items-center justify-center">
              <h6 className="text-white text-xs">4</h6>
            </div>
          </div>
          <div className="flex space-x-2 bg-cardBg rounded-xl px-3 py-2 items-center cursor-pointer">
            <img src="/heart.svg" alt="Heart Icon" className="size-4" />
            <h6 className="text-white text-sm">Favorites</h6>
            <div className="bg-background rounded-full size-4 text-secondary flex items-center justify-center">
              <h6 className="text-white text-xs">2</h6>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-2 p-4 bg-cardBg rounded-xl min-w-full">
          <div className="flex justify-between w-full items-center pb-2">
            <h6 className="text-white text-sm">UEFA Champions League</h6>
            <div className="flex justify-end">
              <ChevronRight className="text-white items-end size-5" />
            </div>
          </div>

          <div className="border-l-2 border-danger flex items-center">
            <div className="py-5">
              <span className="text-danger text-xs px-4">FT</span>
            </div>
            <div className="flex flex-col p-2 space-y-2">
              <div className="flex space-x-2 items-center">
                <img src="/arsenal.svg" alt="Arsenal Logo" className="size-4" />
                <h6 className="text-white text-sm">Arsenal</h6>
                <div className="bg-bgMuted p-1  flex space-x-0.5 items-center justify-center rounded-md">
                  <img src="/correct.svg" alt="Correct Icon" />
                  <span className="text-secondary text-[8px] md:text-xs">
                    AGG
                  </span>
                </div>
              </div>
              <div className="flex space-x-2 items-center">
                <img
                  src="/valencia.svg"
                  alt="Valencia Logo"
                  className="size-4"
                />
                <h6 className="text-white text-sm">Valencia</h6>
              </div>
            </div>

            <div className="flex justify-end py-2  w-full items-center space-x-5  ">
              <div className="flex space-x-2">
                <div className="flex flex-col text-[#6B7280] text-xs space-y-2">
                  <div className="text-[#6B7280]">[2]</div>
                  <div className="text-[#6B7280]">[0]</div>
                </div>
                <div className="flex flex-col text-white text-xs space-y-2">
                  <div className="">2</div>
                  <div className="">1</div>
                </div>
              </div>

              <div className="flex items-center">
                <img
                  src="/menuDot.svg"
                  alt="Menu Dot Icon"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>

          <hr className="border border-b-[#2A2B41]" />

          <div className="border-l-2 border-danger flex items-center">
            <div className="py-5">
              <span className="text-danger text-xs px-4">FT</span>
            </div>
            <div className="flex flex-col p-2 space-y-2">
              <div className="flex space-x-2 items-center">
                <img src="/madrid.svg" alt="Madrid Logo" className="size-4" />
                <h6 className="text-white text-sm whitespace-nowrap">
                  Real Madrid
                </h6>
                <img
                  src="/redCard.svg"
                  alt="Red Card Icon"
                  className="size-3"
                />
              </div>
              <div className="flex space-x-2 items-center">
                <img
                  src="/manCity.svg"
                  alt="Valencia Logo"
                  className="size-4"
                />
                <h6 className="text-white text-sm whitespace-nowrap">
                  Manchester city
                </h6>
                <div className="bg-bgMuted p-1  flex space-x-0.5 items-center justify-center rounded-md">
                  <img src="/correct.svg" alt="Correct Icon" />
                  <span className="text-secondary text-[8px] md:text-xs">
                    PEN
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-end py-2  w-full items-center space-x-5  ">
              <div className="flex space-x-2">
                <div className="flex flex-col text-[#6B7280] text-xs space-y-2">
                  <div className="text-[#6B7280]">[2]</div>
                  <div className="text-[#6B7280]">[0]</div>
                </div>
                <div className="flex flex-col text-white text-xs space-y-2">
                  <div className="">2</div>
                  <div className="">1</div>
                </div>
              </div>

              <div className="flex items-center">
                <img
                  src="/menuDot.svg"
                  alt="Menu Dot Icon"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
          <hr className="border border-b-[#2A2B41]" />
        </div>

        <div className="flex flex-col space-y-2 p-4 bg-cardBg rounded-xl min-w-full">
          <div className="flex justify-between w-full items-center pb-2">
            <h6 className="text-white text-sm">English Premier League</h6>
            <div className="flex justify-end">
              <ChevronRight className="text-white items-end size-5" />
            </div>
          </div>

          <div className="border-l-2 border-secondary flex items-center relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-[calc(10%+60px)] bg-gradient-to-r from-[#1B3337] to-transparent pointer-events-none" />
            <div className="py-5 relative z-10">
              <span className="text-secondary text-xs px-4 font-bold underline decoration-2 underline-offset-4">
                63'
              </span>
            </div>
            <div className="flex flex-col p-2 space-y-2 relative z-10">
              <div className="flex space-x-2 items-center">
                <img src="/arsenal.svg" alt="Arsenal Logo" className="size-4" />
                <h6 className="text-white text-sm">Arsenal</h6>
              </div>
              <div className="flex space-x-2 items-center">
                <img
                  src="/manCity.svg"
                  alt="Manchester City Logo"
                  className="size-4"
                />
                <h6 className="text-white text-sm whitespace-nowrap">
                  Manchester City
                </h6>
              </div>
            </div>
            <div className="flex justify-end py-2 w-full items-center space-x-5 relative z-10">
              <div className="flex space-x-2">
                <div className="flex flex-col text-white text-xs space-y-2">
                  <div>2</div>
                  <div>1</div>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="/menuDot.svg"
                  alt="Menu Dot Icon"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>

          <hr className="border border-b-[#2A2B41]" />

          <div className="border-l-2 border-secondary flex items-center relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-[calc(10%+60px)] bg-gradient-to-r from-[#1B3337] to-transparent pointer-events-none" />
            <div className="py-5 relative z-10">
              <span className="text-secondary text-xs px-4 font-bold underline decoration-2 underline-offset-4">
                HT
              </span>
            </div>
            <div className="flex flex-col p-2 space-y-2 relative z-10">
              <div className="flex space-x-2 items-center">
                <img
                  src="/newcastle.svg"
                  alt="Newcastle United Logo"
                  className="size-4"
                />
                <h6 className="text-white text-sm whitespace-nowrap">
                  Newcastle United
                </h6>
              </div>
              <div className="flex space-x-2 items-center">
                <img
                  src="/liverpool.svg"
                  alt="Liverpool Logo"
                  className="size-4"
                />
                <h6 className="text-white text-sm whitespace-nowrap">
                  Liverpool
                </h6>
              </div>
            </div>
            <div className="flex justify-end py-2 w-full items-center space-x-5 relative z-10">
              <div className="flex space-x-2">
                <div className="flex flex-col text-white text-xs space-y-2">
                  <div>2</div>
                  <div>1</div>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="/menuDot.svg"
                  alt="Menu Dot Icon"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
          <hr className="border border-b-[#2A2B41]" />

          <div className="border-l-2 border-[#374151] flex items-center">
            <div className="py-5">
              <span className="text-white text-xs px-2">23:00</span>
            </div>
            <div className="flex flex-col p-2 space-y-2">
              <div className="flex space-x-2 items-center">
                <img src="/burnley.svg" alt="Burnley Logo" className="size-4" />
                <h6 className="text-white text-sm whitespace-nowrap">
                  Burnley
                </h6>
              </div>
              <div className="flex space-x-2 items-center">
                <img
                  src="/manUnited.svg"
                  alt="Manchester United Logo"
                  className="size-4"
                />
                <h6 className="text-white text-sm whitespace-nowrap">
                  Manchester United
                </h6>
              </div>
            </div>

            <div className="flex justify-end py-2  w-full items-center space-x-5  ">
              <div className="flex items-center">
                <img
                  src="/menuDot.svg"
                  alt="Menu Dot Icon"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>

          <hr className="border border-b-[#2A2B41]" />

          <div className="border-l-2 border-[#374151] flex items-center">
            <div className="py-5">
              <span className="text-white text-xs px-2">23:00</span>
            </div>
            <div className="flex flex-col p-2 space-y-2">
              <div className="flex space-x-2 items-center">
                <img src="/chealse.svg" alt="Chelsea Logo" className="size-4" />
                <h6 className="text-white text-sm whitespace-nowrap">
                  Chelsea
                </h6>
              </div>
              <div className="flex space-x-2 items-center">
                <img
                  src="/southampton.svg"
                  alt="Southampton Logo"
                  className="size-4"
                />
                <h6 className="text-white text-sm whitespace-nowrap">
                  Southampton
                </h6>
              </div>
            </div>

            <div className="flex justify-end py-2  w-full items-center space-x-5  ">
              <div className="flex items-center">
                <img
                  src="/menuDot.svg"
                  alt="Menu Dot Icon"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
          <hr className="border border-b-[#2A2B41]" />
        </div>
      </div>
    </div>
  );
}

export default Fixtures;
