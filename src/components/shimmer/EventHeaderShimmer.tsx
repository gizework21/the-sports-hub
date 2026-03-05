
function EventHeaderShimmer() {
  return (
    <>
      <div className="flex space-x-4 items-center">
        <div className="size-5 bg-gray-700 rounded animate-pulse" />
        <div className="h-4 w-32 bg-gray-700 rounded animate-pulse" />
      </div>

      <div className="flex justify-evenly mt-4">
        <div className="flex flex-col items-center space-y-2">
          <div className="size-12 rounded-full bg-gray-700 animate-pulse" />
          <div className="h-3 w-20 bg-gray-700 rounded animate-pulse" />
        </div>

        <div className="flex flex-col items-center space-y-2">
          <div className="h-3 w-20 bg-gray-700 rounded animate-pulse" />
          <div className="h-6 w-16 bg-gray-700 rounded animate-pulse" />
          <div className="h-4 w-10 bg-gray-700 rounded animate-pulse" />
        </div>

        <div className="flex flex-col items-center space-y-2">
          <div className="size-12 rounded-full bg-gray-700 animate-pulse" />
          <div className="h-3 w-20 bg-gray-700 rounded animate-pulse" />
        </div>
      </div>
    </>
  );
}

export default EventHeaderShimmer;
