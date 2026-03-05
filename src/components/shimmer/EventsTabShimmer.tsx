function EventsTabShimmer() {
  return (
    <div className="flex justify-center space-x-8">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="h-3 w-10 rounded bg-gray-700 animate-pulse"></div>
          <div className="mt-2 h-0.5 w-10 bg-gray-700 animate-pulse"></div>
        </div>
      ))}
    </div>
  );
}

export default EventsTabShimmer;
