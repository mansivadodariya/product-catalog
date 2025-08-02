export const fetchAllProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

export const fetchProductById = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
};
