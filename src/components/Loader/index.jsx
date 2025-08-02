import { STRINGS } from "../../constants/strings";

const Loader = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-blue-800 via-purple-600 to-pink-500 text-white px-4">
    <div className="flex-col gap-4 w-full flex items-center justify-center">
      <div className="w-20 h-20 border-4 border-transparent animate-spin flex items-center justify-center border-t-white rounded-full">
        <div className="w-16 h-16 border-4 border-transparent animate-spin flex items-center justify-center border-t-pink-200 rounded-full"></div>
      </div>
      <p className="mt-6 text-white font-semibold text-lg tracking-wide animate-pulse">
        {STRINGS.LOADING}
      </p>
    </div>
  </div>
);

export default Loader;
