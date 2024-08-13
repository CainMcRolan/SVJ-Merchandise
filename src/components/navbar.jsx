import Logo from "../assets/images/Logo.png";
import { NavLink } from "react-router-dom";

export default function NavBar() {
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
      <img
        src={Logo}
        alt="Patriarch Clotify Logo"
        className="rounded-full w-40"
      />
      <NavLink className="mx-4 hover:border-b-2 border-black transition-all">
        About
      </NavLink>
      <NavLink className="mx-4 hover:border-b-2 border-black transition-all">
        Contacts
      </NavLink>
    </header>
  );
}
