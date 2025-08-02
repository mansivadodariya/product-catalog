import { STRINGS } from "../../constants/strings";

const Loader = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-blue-800 via-purple-600 to-pink-500 text-white px-4">
    <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mb-6"></div>
    <p className="text-xl font-semibold tracking-wide">{STRINGS.LOADING}</p>
  </div>
);

export default Loader;
