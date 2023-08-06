import Cart from "./Cart";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed h-24 w-full bg-orange-400 top-0 flex justify-around">
      <Link to="/">Home</Link>
      <Link to="shopping">Browse Products</Link>
      <Link to="cart">
        <div className="text-4xl relative">
          🛒
          <p className=" font-bold absolute top-0 left-2 text-2xl">9+</p>
        </div>
      </Link>
    </header>
  );
}
