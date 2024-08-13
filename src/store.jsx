import React, { useState, useEffect } from "react";
import NavBar from "./components/navbar";
import StoreBody from "./components/storeComponents/storeBody";

export default function Store() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        if (data) setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    document.title = "STORE || MERCHANDISE COLLECTION";

    return () => {
      document.title = "SVJ Merchandise";
    };
  }, []);

  return (
    <div className="min-h-full min-w-full bg-white">
      <NavBar></NavBar>
      <StoreBody products={products}></StoreBody>
    </div>
  );
}
