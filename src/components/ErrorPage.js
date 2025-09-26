import { useRouteError, Link } from "react-router";

const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="h-screen w-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md">
        <h1 className="text-6xl font-bold text-red-500 mb-4">Oops!</h1>
        <h2 className="text-2xl font-semibold mb-2">Something Went Wrong!</h2>
        <h3 className="text-gray-600 mb-6">
          {err?.status || "Error"}: {err?.statusText || "Unknown Error"}
        </h3>
        <Link
          to="/"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
