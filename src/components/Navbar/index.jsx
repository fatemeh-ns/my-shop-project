import { Link } from "react-router-dom";
import { useAuth } from "../../components/Context/AuthContext";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

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
        {isLoggedIn ? (
          <Link
            onClick={handleLogout}
            className="bg-neutral-900 text-[#fff] text-sm w-[100px] py-[5px] text-center rounded-md hover:bg-white hover:text-black transition"
            to="/login"
          >
            LOGOUT
          </Link>
        ) : (
          <>
            <Link
              className="bg-neutral-900 text-[#fff] text-sm w-[100px] py-[5px] text-center rounded-md hover:bg-white hover:text-black transition"
              to="/login"
            >
              LOGIN
            </Link>
            <Link
              className="bg-neutral-900 text-[#fff] text-sm w-[100px] py-[5px] text-center rounded-md hover:bg-white hover:text-black transition"
              to="/sing"
            >
              SING
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
