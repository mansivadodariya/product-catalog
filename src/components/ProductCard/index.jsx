import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="flex flex-col border rounded-lg duration-200 border-t-cyan-300 border-r-cyan-300 border-b-pink-400 border-l-pink-300 hover:border-purple-500 bg-white p-4 hover:shadow-md transition h-full"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full duration-200 hover:scale-110 h-48 object-contain mb-3 mt-6"
      />
      <div className="flex flex-col justify-between flex-grow bg-slate-100 p-4 rounded-md">
        <h2 className="font-bold text-base sm:text-lg mb-4 line-clamp-2 bg-gradient-to-r from-purple-900 to-pink-900 bg-clip-text text-transparent">
          {product.title}
        </h2>
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
