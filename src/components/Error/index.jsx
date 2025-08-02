import { MESSAGES } from "../../constants/messages";

const Error = ({ message = MESSAGES.FETCH_PRODUCTS_FAILED }) => (
  <div className="text-center py-20 text-red-600 font-medium text-lg">
    {message}
  </div>
);

export default Error;
