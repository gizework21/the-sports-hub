import { ChevronLeft } from "lucide-react";
import Header from "../../components/common/Header";
import { useState } from "react";

interface Tab {
  label: string;
  active?: boolean;
}

const tabs: Tab[] = [
  { label: "Details" },
  { label: "Odds" },
  { label: "Events", active: true },
  { label: "Stats" },
  { label: "Standings" },
];

function MatchDetails() {
  const [activeTab, setActiveTab] = useState<string>(
    tabs.find((t) => t.active)?.label || tabs[0].label,
  );
  return (
    <div className="flex flex-col">
      <Header />

      <div className="bg-background min-h-screen p-4 lg:px-72 md:py-4 flex flex-col space-y-4 w-full">
        <div className="pt-2 px-4 flex flex-col space-y-6 bg-cardBg border-b border-[#2A2B41] ">
          <div className="flex space-x-4 items-center">
            <ChevronLeft className="text-white size-5" />
            <span className="text-sm text-white">English Premier league</span>
          </div>

          <div className="flex justify-evenly">
            <div className="flex flex-col items-center">
              <div className="relative">
                <img src="/arsenalLg.svg" alt="arsenal logo" />
                <img
                  src="/yellowNum2.svg"
                  alt=""
                  className="absolute -right-3 top-0"
                />
              </div>
              <h6 className="text-white text-center text-sm">Arsenal</h6>
            </div>

            <div className="flex flex-col items-center space-y-0.5">
              <h6 className="text-sm text-[#E5E7EB]">11 AUG</h6>
              <h6 className="text-2xl text-white">2 - 1</h6>
              <div className="bg-danger px-1 flex justify-center items-center rounded-sm text-white text-xs">
                Finished
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative">
                <img
                  src="/redNum1.svg"
                  alt=""
                  className="absolute -left-5 top-0"
                />
                <img
                  src="/yellowNum1.svg"
                  alt=""
                  className="absolute -left-2 top-0"
                />

                <img src="/liverpoolLg.svg" alt="arsenal logo" />
              </div>
              <h6 className="text-white text-center text-sm">Liverpool</h6>
            </div>
          </div>

          <div className="flex justify-center space-x-8 ">
            {tabs.map((tab) => (
              <h6
                key={tab.label}
                className={`text-sm cursor-pointer pb-2 ${
                  activeTab === tab.label
                    ? "text-white border-b-2 border-secondary"
                    : "text-muted"
                }`}
                onClick={() => setActiveTab(tab.label)}
              >
                {tab.label}
              </h6>
            ))}
          </div>
        </div>

        <div className="bg-cardBg p-4 rounded-md flex flex-col space-y-4">
          <h6 className="text-sm font-medium text-white">Events</h6>
          <div className="flex items-center space-x-4">
            <hr className="border-b border-[#292B41] w-full" />
            <div className="flex space-x-2  whitespace-nowrap text-[#E5E7EB]">
              <h6>Fulltime</h6>
              <h6>2 - 1</h6>
            </div>
            <hr className="border-b border-[#292B41] w-full" />
          </div>

          <div className="flex flex-col space-y-2 items-center ">
            <div className="flex space-x-1 items-center">
              <div className="flex space-x-2 items-center">
                <div className="flex flex-col">
                  <h6 className="text-sm text-white">Gyokores</h6>
                  <h6 className="text-sm text-[#6B7280]">Odegard</h6>
                </div>
                <img
                  src="/exchange.svg"
                  alt="exchange icon"
                  className="size-4"
                />
              </div>
              <hr className="border-b border-[#292B41] w-4" />
              <div className="bg-[#26273B] px-4 py-0.5 rounded-2xl text-white">
                89’
              </div>
            </div>

            <div className="flex space-x-1 items-center">
              <div className="bg-secondary text-black px-4 py-0.5 rounded-2xl ">
                88’
              </div>
              <hr className="border-b border-[#292B41] w-4" />
              <div className="flex space-x-2 items-center">
                <img
                  src="/greenball.svg"
                  alt="green ball icon"
                  className="size-4"
                />
                <div className="flex flex-col">
                  <h6 className="text-sm text-white">Gyokores</h6>
                  <h6 className="text-sm text-[#6B7280]">Odegard</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchDetails;
