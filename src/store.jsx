import React, { useState, useEffect } from "react";
import NavBar from "./components/navbar";
import StoreBody from "./components/storeComponents/storeBody";

export default function Store() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(
          "https://fakestoreapi.com/products?limit=20"
        );
        let data = await response.json();
        if (data) setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-full min-w-full bg-white">
      <NavBar></NavBar>
      <StoreBody products={products}></StoreBody>
    </div>
  );
}
