const ProductFilters = ({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort,
  uniqueCategories,
  STRINGS,
}) => {
  return (
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
  );
};

export default ProductFilters;
