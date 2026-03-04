export const ChampionsLeagueShimmer = () => {
  return (
    <div className="flex flex-col space-y-2 p-4 bg-cardBg rounded-xl min-w-full font-interRegular animate-pulse">
      <div className="flex justify-between w-full items-center pb-2">
        <div className="h-5 bg-gray-700 rounded w-48"></div>
        <div className="flex justify-end">
          <div className="size-5 bg-gray-700 rounded"></div>
        </div>
      </div>

      <div className="border-l-2 border-danger flex items-center">
        <div className="py-5">
          <div className="h-4 bg-gray-700 rounded w-8 ml-4"></div>
        </div>
        <div className="flex flex-col p-2 space-y-2 flex-1">
          <div className="flex space-x-2 items-center">
            <div className="size-4 bg-gray-700 rounded-full"></div>
            <div className="h-4 bg-gray-700 rounded w-20"></div>
            <div className="bg-bgMuted p-1 flex space-x-0.5 items-center justify-center rounded-md">
              <div className="size-3 bg-gray-700 rounded"></div>
              <div className="h-3 bg-gray-700 rounded w-6"></div>
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <div className="size-4 bg-gray-700 rounded-full"></div>
            <div className="h-4 bg-gray-700 rounded w-24"></div>
          </div>
        </div>

        <div className="flex justify-end py-2 items-center space-x-5 pr-4">
          <div className="flex space-x-2">
            <div className="flex flex-col space-y-2">
              <div className="h-4 bg-gray-700 rounded w-4"></div>
              <div className="h-4 bg-gray-700 rounded w-4"></div>
            </div>
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

      {/* Match 2 - FT with PEN and Red Card */}
      <div className="border-l-2 border-danger flex items-center">
        <div className="py-5">
          <div className="h-4 bg-gray-700 rounded w-8 ml-4"></div>
        </div>
        <div className="flex flex-col p-2 space-y-2 flex-1">
          <div className="flex space-x-2 items-center">
            <div className="size-4 bg-gray-700 rounded-full"></div>
            <div className="h-4 bg-gray-700 rounded w-28"></div>
            <div className="size-3 bg-gray-700 rounded"></div>
          </div>
          <div className="flex space-x-2 items-center">
            <div className="size-4 bg-gray-700 rounded-full"></div>
            <div className="h-4 bg-gray-700 rounded w-32"></div>
            <div className="bg-bgMuted p-1 flex space-x-0.5 items-center justify-center rounded-md">
              <div className="size-3 bg-gray-700 rounded"></div>
              <div className="h-3 bg-gray-700 rounded w-6"></div>
            </div>
          </div>
        </div>

        <div className="flex justify-end py-2 items-center space-x-5 pr-4">
          <div className="flex space-x-2">
            <div className="flex flex-col space-y-2">
              <div className="h-4 bg-gray-700 rounded w-4"></div>
              <div className="h-4 bg-gray-700 rounded w-4"></div>
            </div>
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
    </div>
  );
};
