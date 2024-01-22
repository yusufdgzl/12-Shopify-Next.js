import { useEffect, useState } from "react";
import ProductCard from "./product-card";
import { useSelector } from "react-redux";

function Prodcuts() {
  const [products, setProducts] = useState([]);

  const searchTerm = useSelector((state) => state.search.searchTerm);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProduct = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mx-10 md:m-auto md:my-10 my-14 gap-y-20 font-semibold tracking-widest ">
      {filteredProduct.map((item) => (
        <ProductCard {...item} key={item.id} />
      ))}
    </div>
  );
}

export default Prodcuts;
