import { useState } from "react";
import { tabs } from "../../constants/navLinks";
import EventsTabShimmer from "../shimmer/EventsTabShimmer";

function EventTabs({ isLoading }: { isLoading: boolean }) {
  const [activeTab, setActiveTab] = useState<string>(
    tabs.find((t) => t.active)?.label || tabs[0].label,
  );

  if (isLoading) {
    return <EventsTabShimmer />;
  }

  return (
    <div className="flex justify-center space-x-8">
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
  );
}

export default EventTabs;
