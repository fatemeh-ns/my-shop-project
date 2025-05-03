import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../components/Context/AuthContext";

const NavBar = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  return (
    <nav className="space-x-4 flex flex-wrap gap-5 items-center justify-between px-8 py-3">
      <div className="flex gap-8 items-center">
        <h2 className="uppercase font-bold text-2xl">cien.</h2>
        <div className="hidden md:flex gap-8">
          <Link to="/">HOME</Link>
          <Link to="/products">PRODUCTS</Link>
          <Link to="/cart">CART</Link>
          <Link to="/search">SEARCH</Link>
        </div>
      </div>

      <div className="hidden md:flex gap-5 items-center">
        {isLoggedIn ? (
          <Link
            onClick={handleLogout}
            className="bg-neutral-900 text-white text-sm w-[100px] py-[5px] text-center rounded-md hover:bg-white hover:text-black transition"
            to="/login"
          >
            LOGOUT
          </Link>
        ) : (
          <>
            <Link
              className="bg-neutral-900 text-white text-sm w-[100px] py-[5px] text-center rounded-md hover:bg-white hover:text-black transition"
              to="/login"
            >
              LOGIN
            </Link>
            <Link
              className="bg-neutral-900 text-white text-sm w-[100px] py-[5px] text-center rounded-md hover:bg-white hover:text-black transition"
              to="/sing"
            >
              SING
            </Link>
          </>
        )}
      </div>
      {/* responsive */}
      <button
        className="md:hidden text-2xl"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        ☰
      </button>
      {menuOpen && (
        <div className="md:hidden absolute top-10 right-0 w-full bg-white shadow-md flex flex-col items-start px-6 py-4 gap-3 z-50">
          <Link to="/" onClick={toggleMenu}>
            HOME
          </Link>
          <Link to="/products" onClick={toggleMenu}>
            PRODUCTS
          </Link>
          <Link to="/cart" onClick={toggleMenu}>
            CART
          </Link>
          <Link to="/search" onClick={toggleMenu}>
            SEARCH
          </Link>
          {isLoggedIn ? (
            <Link
              onClick={() => {
                handleLogout();
                toggleMenu();
              }}
              className="bg-neutral-900 text-white text-sm w-[100px] py-[5px] text-center rounded-md hover:bg-white hover:text-black transition"
              to="/login"
            >
              LOGOUT
            </Link>
          ) : (
            <>
              <Link
                className="bg-neutral-900 text-white text-sm w-[100px] py-[5px] text-center rounded-md hover:bg-white hover:text-black transition"
                to="/login"
                onClick={toggleMenu}
              >
                LOGIN
              </Link>
              <Link
                className="bg-neutral-900 text-white text-sm w-[100px] py-[5px] text-center rounded-md hover:bg-white hover:text-black transition"
                to="/sing"
                onClick={toggleMenu}
              >
                SING
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
