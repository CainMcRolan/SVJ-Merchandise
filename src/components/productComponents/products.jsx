import { useParams } from "react-router-dom";
import NavBar from "../navbar";
import { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";

export default function Products() {
  let { productId } = useParams();
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async (id) => {
      try {
        let response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (response.ok) {
          let product = await response.json();
          setCurrentProduct(product);
        }
      } catch (err) {
        alert(`There is an error: ${err}`);
      }
    };

    fetchProduct(productId);
  }, [productId]);

  console.log(currentProduct);

  return (
    <div className="min-h-full min-w-full bg-white">
      <NavBar></NavBar>
      {currentProduct ? (
        <div className="h-[90%] w-full">
          <img
            src={currentProduct.image}
            alt={currentProduct.title}
            className="w-60 h-60"
          />
        </div>
      ) : (
        <div className="w-full h-[90%] flex justify-center items-center">
          <BeatLoader />
        </div>
      )}
    </div>
  );
}
