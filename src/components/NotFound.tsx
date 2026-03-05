import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-bold text-gray-900">404</h1>

        <h2 className="mt-4 text-2xl font-semibold text-gray-700">
          Page not found
        </h2>
        <p className="mt-3 text-gray-500">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 rounded-lg bg-black text-white font-medium hover:bg-gray-800 transition"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
