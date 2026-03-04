// LoadingShimmer.tsx
export const MatchStatusFilterShimmer = () => {
  return (
    <div className="flex space-x-4 animate-pulse">
      <div className="flex space-x-2 rounded-xl px-3 py-2 items-center bg-cardBg">
        <div className="h-4 bg-gray-700 rounded w-6"></div>
        <div className="h-4 bg-gray-700 rounded w-8"></div>
      </div>

      <div className="flex space-x-2 rounded-xl px-3 py-2 items-center bg-cardBg">
        <div className="size-4 bg-gray-700 rounded"></div>
        <div className="h-4 bg-gray-700 rounded w-8"></div>
        <div className="bg-background rounded-full size-4 flex items-center justify-center">
          <div className="h-3 bg-gray-700 rounded w-3"></div>
        </div>
      </div>

      <div className="flex space-x-2 rounded-xl px-3 py-2 items-center bg-cardBg">
        <div className="size-4 bg-gray-700 rounded"></div>
        <div className="h-4 bg-gray-700 rounded w-12"></div>
        <div className="bg-background rounded-full size-4 flex items-center justify-center">
          <div className="h-3 bg-gray-700 rounded w-3"></div>
        </div>
      </div>
    </div>
  );
};
