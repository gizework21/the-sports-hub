export const PremierLeagueShimmer = () => {
  return (
    <div className="flex flex-col space-y-2 p-4 bg-cardBg rounded-xl min-w-full animate-pulse">
      <div className="flex justify-between w-full items-center pb-2">
        <div className="h-5 bg-gray-700 rounded w-48"></div>
        <div className="flex justify-end">
          <div className="size-5 bg-gray-700 rounded"></div>
        </div>
      </div>

      <div className="border-l-2 border-secondary flex items-center relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-[calc(10%+60px)] bg-linear-to-r from-[#1B3337] to-transparent pointer-events-none" />
        <div className="py-5 px-4 relative z-10">
          <div className="h-4 bg-gray-700 rounded w-8"></div>
        </div>
        <div className="flex flex-col p-2 space-y-2 relative z-10 flex-1">
          <div className="flex space-x-2 items-center">
            <div className="size-4 bg-gray-700 rounded-full"></div>
            <div className="h-4 bg-gray-700 rounded w-24"></div>
          </div>
          <div className="flex space-x-2 items-center">
            <div className="size-4 bg-gray-700 rounded-full"></div>
            <div className="h-4 bg-gray-700 rounded w-28"></div>
          </div>
        </div>
        <div className="flex justify-end py-2 items-center space-x-5 relative z-10 pr-4">
          <div className="flex space-x-2">
            <div className="flex flex-col space-y-2">
              <div className="h-4 bg-gray-700 rounded w-4"></div>
              <div className="h-4 bg-gray-700 rounded w-4"></div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="size-5 bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>

      <hr className="border border-b-[#2A2B41]" />

      <div className="border-l-2 border-secondary flex items-center relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-[calc(10%+60px)] bg-linear-to-r from-[#1B3337] to-transparent pointer-events-none" />
        <div className="py-5 px-4 relative z-10">
          <div className="h-4 bg-gray-700 rounded w-8"></div>
        </div>
        <div className="flex flex-col p-2 space-y-2 relative z-10 flex-1">
          <div className="flex space-x-2 items-center">
            <div className="size-4 bg-gray-700 rounded-full"></div>
            <div className="h-4 bg-gray-700 rounded w-32"></div>
          </div>
          <div className="flex space-x-2 items-center">
            <div className="size-4 bg-gray-700 rounded-full"></div>
            <div className="h-4 bg-gray-700 rounded w-24"></div>
          </div>
        </div>
        <div className="flex justify-end py-2 items-center space-x-5 relative z-10 pr-4">
          <div className="flex space-x-2">
            <div className="flex flex-col space-y-2">
              <div className="h-4 bg-gray-700 rounded w-4"></div>
              <div className="h-4 bg-gray-700 rounded w-4"></div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="size-5 bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>

      <hr className="border border-b-[#2A2B41]" />

      <div className="border-l-2 border-[#374151] flex items-center">
        <div className="py-5 px-2">
          <div className="h-4 bg-gray-700 rounded w-12"></div>
        </div>
        <div className="flex flex-col p-2 space-y-2 flex-1">
          <div className="flex space-x-2 items-center">
            <div className="size-4 bg-gray-700 rounded-full"></div>
            <div className="h-4 bg-gray-700 rounded w-20"></div>
          </div>
          <div className="flex space-x-2 items-center">
            <div className="size-4 bg-gray-700 rounded-full"></div>
            <div className="h-4 bg-gray-700 rounded w-28"></div>
          </div>
        </div>
        <div className="flex justify-end py-2 items-center pr-4">
          <div className="flex items-center">
            <div className="size-5 bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>

      <hr className="border border-b-[#2A2B41]" />

      <div className="border-l-2 border-[#374151] flex items-center">
        <div className="py-5 px-2">
          <div className="h-4 bg-gray-700 rounded w-12"></div>
        </div>
        <div className="flex flex-col p-2 space-y-2 flex-1">
          <div className="flex space-x-2 items-center">
            <div className="size-4 bg-gray-700 rounded-full"></div>
            <div className="h-4 bg-gray-700 rounded w-20"></div>
          </div>
          <div className="flex space-x-2 items-center">
            <div className="size-4 bg-gray-700 rounded-full"></div>
            <div className="h-4 bg-gray-700 rounded w-24"></div>
          </div>
        </div>
        <div className="flex justify-end py-2 items-center pr-4">
          <div className="flex items-center">
            <div className="size-5 bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
