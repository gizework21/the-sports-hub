import { CalendarRange, ChevronLeft, ChevronRight } from "lucide-react";

function FixturesHeaderSection() {
  return (
    <div className="hidden md:flex flex-col space-y-4 font-interRegular">
      <h6 className="text-white text-xl font-semibold">Macthes</h6>
      <div className="bg-cardBg px-4 py-3 flex justify-between items-center">
        <ChevronLeft className="text-white size-5 cursor-pointer" />
        <div className="flex space-x-2 items-center cursor-pointer">
          <CalendarRange className="text-white size-5" />
          <h6 className="text-white font-semibold">Today</h6>
        </div>
        <ChevronRight className="text-white size-5 cursor-pointer" />
      </div>
    </div>
  );
}

export default FixturesHeaderSection;
