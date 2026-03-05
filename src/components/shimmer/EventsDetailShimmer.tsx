function EventsDetailShimmer() {
  return (
    <div className="bg-cardBg p-4 rounded-md flex flex-col space-y-4 animate-pulse">
      <div className="h-4 w-16 bg-gray-700 rounded"></div>

      {[1, 2, 3].map((section) => (
        <div key={section} className="space-y-3">
          <div className="flex items-center space-x-4">
            <div className="border-b border-[#292B41] w-full"></div>
            <div className="flex space-x-2">
              <div className="h-4 w-20 bg-gray-700 rounded"></div>
              <div className="h-4 w-8 bg-gray-700 rounded"></div>
            </div>
            <div className="border-b border-[#292B41] w-full"></div>
          </div>

          <div className="space-y-3">
            {[1, 2].map((event) => (
              <div key={event} className="flex items-center space-x-3">
                <div className="h-4 w-8 bg-gray-700 rounded"></div>
                <div className="h-4 w-4 bg-gray-700 rounded-full"></div>
                <div className="h-4 w-24 bg-gray-700 rounded"></div>
                <div className="h-4 w-16 bg-gray-700 rounded ml-auto"></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventsDetailShimmer;
