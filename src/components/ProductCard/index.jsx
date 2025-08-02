import { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link
      to={`/product/${product.id}`}
      className="flex flex-col border rounded-lg duration-200 border-t-cyan-300 border-r-cyan-300 border-b-pink-400 border-l-pink-300 hover:border-purple-500 bg-white p-4 hover:shadow-md transition h-full"
    >
      <div className="relative w-full h-48 mb-3 mt-6">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded">
            <div className="flex space-x-2">
              <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:0s]"></span>
              <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
            </div>
          </div>
        )}
        <img
          src={product.image}
          alt={product.title}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-contain duration-200 hover:scale-110 transition-transform ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <div className="flex flex-col justify-between flex-grow bg-slate-100 p-4 rounded-md">
        <div className="relative group">
          <h2 className="font-bold text-base sm:text-lg mb-4 line-clamp-2 bg-gradient-to-r from-purple-900 to-pink-900 bg-clip-text text-transparent">
            {product.title}
          </h2>
          <div className="absolute z-20 hidden group-hover:block bg-gray-900 text-white text-sm px-3 py-2 rounded shadow-lg w-max max-w-xs border border-gray-300">
            {product.title}
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-2 mt-auto pt-4 border-t border-gray-200">
          <p className="text-sm px-3 py-1 rounded-md text-white font-thin bg-gradient-to-r from-purple-600 to-blue-600 shadow-md">
            {product.category}
          </p>
          <p className="text-lg font-bold text-pink-600 border border-purple-200 px-3 py-1 rounded-md whitespace-nowrap overflow-hidden text-ellipsis max-w-[50%] text-right">
            ${product.price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
