import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { GetAllProducts } from "../api/GetAllProducts.jsx";
import { ProductCard } from "../components/ProductCard.jsx";
import { useCart } from "../context/Cart-Context.jsx";
import { GetAllCategories } from "../api/GetAllCategories.jsx";
import { getProductsByCategory } from "../utils/GetProductByCategory.jsx";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory,setSelectedCategory] = useState("All");
  const { cart } = useCart();

  console.log({ cart });

  useEffect(() => {
    (async () => {
      const products = await GetAllProducts();
      let categories = await GetAllCategories();
      categories = categories.filter(category => category.name !== "Ali");
      const updatedCategories = [...categories, { id: "1a", name: "All" }];
      setProducts(products);
      setCategories(updatedCategories);
    })();
  }, []);

  const onCategoryClick = (category) => {
       setSelectedCategory(category);
  };

  const filterByCategories = getProductsByCategory(products,selectedCategory);

  return (
    <>
      <Navbar />
      <main className="pt-8">
        <div className="flex gap-4 justify-center mb-4">
          {categories?.length > 0 &&
            categories.map((category) => (
              <div
                className="bg-green-400 font-semibold rounded-full p-1 hover:cursor-pointer"
                onClick={() => onCategoryClick(category.name)}
              >
                {category.name}
              </div>
            ))}
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          {filterByCategories?.length > 0 ? (
            filterByCategories.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <h2>No Products found.Please try with another category</h2>
          )}
        </div>
      </main>
    </>
  );
}
