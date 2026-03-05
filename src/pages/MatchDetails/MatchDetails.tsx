import Header from "../../components/common/Header";
import { useMatchDetails } from "../../hooks/useMatchDetails";
import ErrorMessage from "../../components/common/ErrorMessage";
import EventTabs from "../../components/matchDetails/EventTabs";
import EventHeader from "../../components/matchDetails/EventHeader";
import EventDetails from "../../components/matchDetails/EventDetails";

function MatchDetails() {
  const { data, isLoading, isError, error } = useMatchDetails();

  if (isError) {
    return (
      <div className="flex flex-col">
        <Header />
        <ErrorMessage
          message={
            (error as Error)?.message ||
            "Something went wrong while fetching fixtures."
          }
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <Header />
      <div className="bg-background min-h-screen p-4 lg:px-72 md:py-4 flex flex-col space-y-4 w-full font-interRegular">
        <div className="pt-2 px-4 flex flex-col space-y-6 bg-cardBg border-b border-[#2A2B41] ">
          <EventHeader data={data} isLoading={isLoading} />
          <EventTabs isLoading={isLoading} />
        </div>
        <EventDetails data={data} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default MatchDetails;
