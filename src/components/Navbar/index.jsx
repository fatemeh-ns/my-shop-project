import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="space-x-4 flex gap-5 items-center justify-between px-8 py-3">
      <div className="flex gap-8 items-center">
        <h2 className="uppercase font-bold text-2xl">cien.</h2>
        <Link to="/">HOME</Link>
        <Link to="/products">PRODUCTS</Link>
        <Link to="/cart">CART</Link>
        <Link to="/search">SEARCH</Link>
      </div>
      <div className="flex gap-5 items-center">
        <p>LOGIN</p>
        <p>SING</p>
      </div>
    </nav>
  );
};

export default NavBar;
