import { Radio } from "lucide-react";

const filters = [
  {
    key: "all",
    label: "All",
    count: 6,
  },
  {
    key: "live",
    label: "Live",
    count: 4,
    icon: <Radio className="size-4" />,
  },
  {
    key: "favorites",
    label: "Favorites",
    count: 2,
    icon: <img src="/heart.svg" alt="Heart Icon" className="size-4" />,
  },
];

function MatchStatusFilter({
  active,
  setActive,
}: {
  active: string;
  setActive: (key: string) => void;
}) {
  return (
    <div className="flex space-x-4 font-interRegular">
      {filters.map((item) => {
        const isActive = active === item.key;
        return (
          <div
            key={item.key}
            onClick={() => setActive(item.key)}
            className={`flex space-x-2 rounded-xl px-3 py-2 items-center cursor-pointer transition ${
              isActive ? "bg-secondary" : "bg-cardBg"
            }`}
          >
            {item.icon && (
              <div className={isActive ? "text-black" : "text-white"}>
                {item.icon}
              </div>
            )}

            <h6 className={`text-sm ${isActive ? "text-black" : "text-white"}`}>
              {item.label}
            </h6>

            <div className="bg-background rounded-full size-4 text-secondary flex items-center justify-center">
              <h6 className="text-white text-xs">{item.count}</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MatchStatusFilter;
