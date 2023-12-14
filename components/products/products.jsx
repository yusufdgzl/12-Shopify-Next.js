import { useEffect, useState } from "react";
import ProductCart from "./product-card";

function Prodcuts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-12 my-14 gap-y-20 font-semibold tracking-widest ">
        {
            products.map(item=> <ProductCart {...item} key={item.id} />)
        }
    </div>
  );
}

export default Prodcuts;
