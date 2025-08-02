import { useEffect, useState } from "react";
import { fetchAllProducts } from "../../services/api";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { STRINGS } from "../../constants/strings";
import ProductCard from "../../components/ProductCard";

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetchAllProducts()
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    let result = [...products];

    if (search) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "all") {
      result = result.filter((p) => p.category === category);
    }

    if (sort === "lowToHigh") {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === "highToLow") {
      result.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(result);
  }, [search, category, sort, products]);

  const uniqueCategories = ["all", ...new Set(products.map((p) => p.category))];

  if (loading) return <Loader />;
  if (error) return <Error />;

  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-blue-800 via-purple-600 to-pink-500 flex items-center justify-center px-4 py-10">
      <div className="relative z-10 w-full max-w-full p-10 bg-white/60 backdrop-blur-xl border border-white/30 rounded-3xl shadow-xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center pb-10 mb-12 border-b-4 border-dashed text-gray-600 tracking-tight">
          {STRINGS.PRODUCTS_TITLE}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-white mb-1">
              {STRINGS.SEARCH}
            </label>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="px-4 py-2 rounded-lg bg-white/30 backdrop-blur-md text-gray-800 placeholder-gray-600 border border-white/40 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-white mb-1">
              {STRINGS.CATEGORY}
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-2 rounded-lg bg-white/30 backdrop-blur-md text-gray-800 border border-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            >
              {uniqueCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-white mb-1">
              {STRINGS.SORT_BY_PRICE}
            </label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="px-4 py-2 rounded-lg bg-white/30 backdrop-blur-md text-gray-800 border border-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            >
              <option value="">{STRINGS.SORT_NONE}</option>
              <option value="lowToHigh">{STRINGS.SORT_LOW_TO_HIGH}</option>
              <option value="highToLow">{STRINGS.SORT_HIGH_TO_LOW}</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
