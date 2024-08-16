import { useParams } from "react-router-dom";
import NavBar from "./components/navbar";
import { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";
import { useCart } from "./context/cartContext";

export default function Products() {
  const cart = useCart();
  let { productId } = useParams();
  const [currentProduct, setCurrentProduct] = useState(null);
  const [productCount, setProductCount] = useState(1);

  useEffect(() => {
    if (currentProduct && currentProduct.title) {
      document.title = `Product | ${currentProduct.title}`;
    }

    return () => {
      document.title = "SVJ Merchandise";
    };
  }, [currentProduct]);

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

  useEffect(() => {
    setProductCount(1);
  }, [productId]);

  //Handle Product Counts

  const handleProductCount = (e) => {
    setProductCount(e.target.value);
  };

  const incrementProductCount = () => {
    setProductCount((prevCount) => {
      if (prevCount < 50) return prevCount + 1;
      return prevCount; // Keeps the count at 50
    });
  };

  const decrementProductCount = () => {
    setProductCount((prevCount) => {
      if (prevCount > 1) return prevCount - 1;
      return prevCount; // Keeps the count at 1
    });
  };

  //Handle Cart Things
  const addToCart = (count) => {
    count = parseInt(count);
    if (count > 0 && count <= 50) {
      cart.setCart((prevCart) => {
        const itemIndex = prevCart.findIndex(
          (item) => item.id === currentProduct.id
        );

        if (itemIndex !== -1) {
          return prevCart.map((item, index) =>
            index === itemIndex ? { ...item, count: item.count + count } : item
          );
        } else {
          return [...prevCart, { ...currentProduct, count: count }];
        }
      });
    }
  };

  return (
    <div className="min-h-full min-w-full bg-white">
      <NavBar></NavBar>
      {currentProduct ? (
        <div className="h-[90%] w-full flex justify-center items-center">
          <div className="w-3/5 h-2/3 shadow-xl rounded-md grid grid-cols-[40%_60%] justify-evenly items-center">
            <div className=" flex justify-center items-center w-full h-full">
              <img
                src={currentProduct.image}
                alt={currentProduct.title}
                className="w-80 h-90 shadow-md p-8"
              />
            </div>

            <div className=" w-11/12 h-2/3 text-justify">
              <h1 className="font-bold font-mono text-3xl">
                {currentProduct.title}
              </h1>
              <p className="text-md">{currentProduct.description}</p>
              <p className="text-zinc-700 text-lg">
                {currentProduct.rating.rate}⭐
              </p>
              <p className="font-bold text-xl">
                ${currentProduct.price.toFixed(2)}
              </p>
              <div className="my-2">
                <button
                  onClick={decrementProductCount}
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 hover:ring-2 focus:ring-red-300 font-bold rounded-lg text-lg px-5 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  -
                </button>
                <input
                  type="number"
                  value={productCount}
                  onChange={(e) => handleProductCount(e)}
                  className="shadow-md rounded-md p-2 mx-2"
                />
                <button
                  onClick={incrementProductCount}
                  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 hover:ring-2 focus:ring-green-300  rounded-lg text-lg font-bold px-5 py-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => addToCart(productCount)}
                className="text-white bg-blue-700 hover:bg-blue-800 hover:ring-2 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                🛒Add to Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-[90%] flex justify-center items-center">
          <BeatLoader />
        </div>
      )}
    </div>
  );
}
