import {
  CalendarRange,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Radio,
} from "lucide-react";

function Fixtures() {
  return (
    <div className="flex flex-col w-full ">
      <div className="bg-Primary px-4 py-2 flex items-center justify-between">
        <img src="/logo.svg" alt="Logo" />
        <div className="flex space-x-1 text-white text-lg font-poppinsRegular ">
          <h6 className="text-white hover:text-secondary p-2   hover:border-b-secondary hover:border-b-3 cursor-pointer">
            Live
          </h6>
          <h6 className="text-secondary hover:text-secondary p-2 border-b-secondary border-b-3 cursor-pointer">
            Matches
          </h6>
          <h6 className="text-muted  p-2">Standings</h6>
          <h6 className="text-white hover:text-secondary p-2 hover:border-b-secondary hover:border-b-3 cursor-pointer">
            Teams
          </h6>
          <h6 className="text-white hover:text-secondary p-2 hover:border-b-secondary hover:border-b-3 cursor-pointer">
            Comparison
          </h6>
          <h6 className="text-white hover:text-secondary p-2 hover:border-b-secondary hover:border-b-3 cursor-pointer">
            Statistics
          </h6>
          <h6 className="text-white hover:text-secondary p-2 hover:border-b-secondary hover:border-b-3 cursor-pointer">
            Venues
          </h6>
        </div>

        <div className="flex space-x-4">
          <img src="/world.svg" alt="World Icon" className="size-10" />
          <img src="/ball.svg" alt="Ball Icon" className="size-10" />
          <div className="bg-[#5D00D9] flex items-center py-2 px-4 rounded-2xl space-x-2 cursor-pointer">
            <img src="/england.svg" alt="England Flag" className="size-4" />
            <h6 className="text-white">Premier League</h6>
            <ChevronDown className="text-[#CAC4D0]" size={16} />
          </div>
          <div className="bg-[#5D00D9] flex items-center py-2 px-4 rounded-2xl space-x-2 cursor-pointer">
            <h6 className="text-[#E6E0E9]">2024/25</h6>
            <ChevronDown className="text-[#CAC4D0]" size={16} />
          </div>
          <img src="/england2.svg" alt="England Flag" className="size-10" />
        </div>
      </div>

      <div className="bg-background min-h-screen px-72 py-4 flex flex-col space-y-4 w-full">
        <div className="flex flex-col space-y-4">
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
                <div className="bg-bgMuted p-1 flex items-center justify-center rounded-md">
                  <img src="/correct.svg" alt="Correct Icon" />
                  <span className="text-secondary text-xs">AGG</span>
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
                <img src="/arsenal.svg" alt="Arsenal Logo" className="size-4" />
                <h6 className="text-white text-sm">Arsenal</h6>
                <img
                  src="/redCard.svg"
                  alt="Red Card Icon"
                  className="size-3"
                />
              </div>
              <div className="flex space-x-2 items-center">
                <img
                  src="/valencia.svg"
                  alt="Valencia Logo"
                  className="size-4"
                />
                <h6 className="text-white text-sm">Valencia</h6>
                <div className="bg-bgMuted p-1 flex items-center justify-center rounded-md">
                  <img src="/correct.svg" alt="Correct Icon" />
                  <span className="text-secondary text-xs">PEN</span>
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
                  src="/valencia.svg"
                  alt="Valencia Logo"
                  className="size-4"
                />
                <h6 className="text-white text-sm">Valencia</h6>
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
                <img src="/arsenal.svg" alt="Arsenal Logo" className="size-4" />
                <h6 className="text-white text-sm">Arsenal</h6>
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
              <span className="text-white text-xs px-4">23:00</span>
            </div>
            <div className="flex flex-col p-2 space-y-2">
              <div className="flex space-x-2 items-center">
                <img src="/arsenal.svg" alt="Arsenal Logo" className="size-4" />
                <h6 className="text-white text-sm">Arsenal</h6>
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
              <span className="text-white text-xs px-4">23:00</span>
            </div>
            <div className="flex flex-col p-2 space-y-2">
              <div className="flex space-x-2 items-center">
                <img src="/arsenal.svg" alt="Arsenal Logo" className="size-4" />
                <h6 className="text-white text-sm">Arsenal</h6>
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
