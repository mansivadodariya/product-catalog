export const filterAndSortProducts = (products, { search, category, sort }) => {
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

  return result;
};
