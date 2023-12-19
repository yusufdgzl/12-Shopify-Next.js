import ProductDetailCard from "@/components/products/product-detail-card";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";

function ProductDetailPage() {
  const [product, setProduct] = useState({});
  const params = useParams();

  console.log(params)

  useEffect(() => {
    if (params) {
      fetch("/products.json")
        .then((res) => res.json())
        .then((data) => {
          const selectedProduct = data.find(
            (item) => item.id === parseInt(params.productId)
          );
          setProduct(selectedProduct);
        });
    }
  }, [params]);

  if(!params){
    return // Mission : Add Loading Animation
  }

  return (
    <div>
      <ProductDetailCard {...product} />
    </div>
  );
}

export default ProductDetailPage;
