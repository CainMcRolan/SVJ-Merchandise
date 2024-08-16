import { NavLink } from "react-router-dom";
import { useCart } from "../context/cartContext";

export default function NavBar() {
  const cart = useCart();

  const checkNoOfItemsInCart = () => {
    if (cart.cart.length === 0) return 0;
    return cart.cart.reduce((acc, cur) => {
      return acc + cur.count;
    }, 0);
  };

  return (
    <header className="min-w-full h-[10%] bg-white shadow-xl flex justify-center items-center font-Anton text-xs">
      <NavLink
        to={"/"}
        className="mx-4 hover:border-b-2 border-black transition-all"
      >
        Home
      </NavLink>
      <NavLink
        to={"/store"}
        className="mx-4 hover:border-b-2 border-black transition-all"
      >
        Shop
      </NavLink>
      <NavLink
        to={"/cart"}
        className="text-3xl font-bold mx-4 hover:border-b-2 transition-all"
      >
        <span>🛒</span>
        <span>{checkNoOfItemsInCart()}</span>
      </NavLink>

      <NavLink className="mx-4 hover:border-b-2 border-black transition-all">
        About
      </NavLink>
      <NavLink className="mx-4 hover:border-b-2 border-black transition-all">
        Contacts
      </NavLink>
    </header>
  );
}
