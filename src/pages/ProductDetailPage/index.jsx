import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Error from "../../components/Error";
import { STRINGS } from "../../constants/strings";
import { MESSAGES } from "../../constants/messages";
import { fetchProductById } from "../../services/api";
import Loader from "../../components/Loader";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchProductById(id)
      .then(setProduct)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader />;
  if (error || !product)
    return <Error message={MESSAGES.FETCH_PRODUCT_FAILED} />;

  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-blue-800 via-purple-600 to-pink-500 flex items-center justify-center px-4 py-10 overflow-hidden">
      <div className="relative z-10 w-full max-w-5xl bg-white/40 backdrop-blur-xl border border-white rounded-3xl shadow-2xl p-6 sm:p-8">
        <div className="mb-6">
          <button
            onClick={() => navigate("/")}
            className="text-sm hover:text-purple-800 bg-white/30 hover:bg-white/60 px-4 py-2 rounded-md transition font-medium"
          >
            {STRINGS.BACK_TO_PRODUCTS}
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="bg-white w-full md:w-1/2 rounded-xl shadow-md p-6 flex items-center justify-center border border-white/30">
            <img
              src={product.image}
              alt={product.title}
              className="w-full max-h-80 object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="text-gray-800 w-full md:w-1/2 flex flex-col h-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 border-b border-white pb-5 bg-gradient-to-r from-purple-900 to-pink-900 bg-clip-text text-transparent tracking-tight leading-tight">
              {product.title}
            </h2>
            <p className="text-md mb-2">
              <span className="font-semibold text-gray-800">
                {STRINGS.CATEGORY}:
              </span>{" "}
              <span className="text-gray-900">{product.category}</span>
            </p>
            <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line">
              <span className="font-semibold text-gray-800">
                {STRINGS.DESCRIPTION}:
              </span>{" "}
              {product.description}
            </p>
            <div className="mt-auto pt-6">
              <p className="text-xl bg-white/85 rounded-md font-bold text-pink-700 px-4 py-2 inline-block shadow-md border border-pink-300">
                {STRINGS.PRICE}: ${product.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
