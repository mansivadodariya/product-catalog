import { useEffect, useState } from "react";
import { fetchAllProducts } from "../../services/api";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { STRINGS } from "../../constants/strings";
import ProductCard from "../../components/ProductCard";
import { filterAndSortProducts } from "../../utils/productFilter";
import ProductFilters from "../../components/ProductFilters";

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
    const result = filterAndSortProducts(products, { search, category, sort });
    setFilteredProducts(result);
  }, [search, category, sort, products]);

  const uniqueCategories = ["all", ...new Set(products.map((p) => p.category))];

  if (loading) return <Loader />;
  if (error) return <Error />;

  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-blue-800 via-purple-600 to-pink-500 flex items-center justify-center px-4 py-10">
      <div className="relative z-10 w-full max-w-full p-10 bg-white/40 backdrop-blur-xl border border-white/30 rounded-3xl shadow-xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center pb-10 mb-12 border-b-4 border-dashed text-gray-700 tracking-tight">
          {STRINGS.PRODUCTS_TITLE}
        </h1>
        <ProductFilters
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          sort={sort}
          setSort={setSort}
          uniqueCategories={uniqueCategories}
          STRINGS={STRINGS}
        />
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
