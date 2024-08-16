import { useCart } from "../../context/cartContext";
import { PacmanLoader } from "react-spinners";

export default function CartBody() {
  const cart = useCart();

  const incrementProductCount = (productId) => {
    cart.setCart((prevCart) => {
      const productIndex = prevCart.findIndex(
        (product) => product.id === productId
      );

      if (productIndex !== -1) {
        return prevCart.map((item, index) =>
          index === productIndex ? { ...item, count: item.count + 1 } : item
        );
      }
    });
  };

  const decrementProductCount = (productId) => {
    cart.setCart((prevCart) => {
      const productIndex = prevCart.findIndex(
        (product) => product.id === productId
      );

      if (productIndex !== -1) {
        return prevCart.map((item, index) => {
          if (item.count > 1) {
            return index === productIndex
              ? { ...item, count: item.count - 1 }
              : item;
          }

          return item;
        });
      }
    });
  };

  const deleteProduct = (productId) => {
    cart.setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };

  return (
    <>
      {cart.cart.length > 0 ? (
        <div className="w-full min-h-[90%] bg-white flex">
          {/* Dynamically Generate Products in Cart */}
          <div className="flex flex-col w-3/5 min-h-[90%] items-center">
            {cart.cart.map((product) => {
              return (
                <div
                  key={product.id}
                  className="grid grid-cols-[40%_60%] w-2/3 min-h-80 rounded-md shadow-md my-4"
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-40 h-40"
                    />
                  </div>
                  <div className="w-full h-full flex flex-col justify-center ">
                    <h1 className="font-bold font-Anton text-xl">
                      {product.title}
                      &nbsp;
                      <span className="rounded-full bg-red-700 text-white text-center px-2 py-1">
                        {product.count}
                      </span>
                    </h1>
                    <p>{product.description.slice(0, 100)}...</p>
                    <p className="font-bold">${product.price.toFixed(2)}</p>
                    <p>⭐{product.rating.rate}</p>
                    <div className="my-2">
                      <input
                        type="text"
                        value={product.count}
                        className="shadow-md rounded-md p-1 mx-1"
                      />
                      <button
                        onClick={() => decrementProductCount(product.id)}
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 hover:ring-2 focus:ring-red-300 font-bold rounded-lg text-lg w-8 py-1 mx-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      >
                        -
                      </button>
                      <button
                        onClick={() => incrementProductCount(product.id)}
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 hover:ring-2 focus:ring-green-300  rounded-lg text-lg font-bold w-8 py-1 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      >
                        +
                      </button>
                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 hover:ring-2 focus:ring-blue-300 font-bold rounded-lg text-lg w-8 py-1  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Summary and CheckOut Part */}
          <div className=" w-2/5 flex flex-col min-h-[90%] items-center ">
            <div className="w-4/5 min-h-auto shadow-md rounded-md flex flex-col p-4">
              <h1 className="font-Anton">Summary</h1>
              <hr className="my-2" />
              {cart.cart.map((product) => {
                return (
                  <div className="grid grid-cols-[50%_15%_15%_15%]">
                    <p className="text-neutral-600 italic">{product.title}</p>
                    <p>${product.price.toFixed(2)}</p>
                    <p>{product.count}</p>
                    <p>${(product.count * product.price).toFixed(2)}</p>
                  </div>
                );
              })}
              <hr className="my-2" />
              <div className="grid grid-cols-[50%_15%_15%_15%]">
                <p className="font-bold">Subtotal</p>
                <span></span>
                <span></span>
                <p>
                  $
                  {cart.cart.reduce(
                    (acc, curr) => acc + curr.price * curr.count,
                    0
                  )}
                </p>
              </div>
              <div className="grid grid-cols-[50%_15%_15%_15%]">
                <p className="font-bold">Tax</p>
                <span></span>
                <span></span>
                <p className="">$0.00</p>
              </div>
              <div className="grid grid-cols-[50%_15%_15%_15%]">
                <p className="font-bold">Total</p>
                <span></span>
                <span></span>
                <p className="font-bold ">
                  $
                  {cart.cart.reduce(
                    (acc, curr) => acc + curr.price * curr.count,
                    0
                  )}
                </p>
              </div>
            </div>
            <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 hover:ring-2 focus:ring-green-300  rounded-lg text-lg font-bold w-4/5 py-1 my-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full h-[90%] flex justify-center items-center flex-col">
          <PacmanLoader />
        </div>
      )}
    </>
  );
}
