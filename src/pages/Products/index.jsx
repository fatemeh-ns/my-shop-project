import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useImageFetch } from "../../assets/fetchImg/img";
import Loading from "../../components/Loading";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../../components/Context/AuthContext";
import "react-toastify/ReactToastify.css";

export default function Product() {
  const { isLoggedIn } = useAuth();
  const clothes = useImageFetch();
  const [animateSection, setAnimateSection] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (clothes && clothes.length > 0) {
      const timer = setTimeout(() => {
        setAnimateSection(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [clothes]);

  const buyHandler = (item) => {
    if (!isLoggedIn) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      toast.error("Please login first!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      cart[existingItemIndex].count += 1;
    } else {
      cart.push({ ...item, count: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    window.scrollTo({ top: 0, behavior: "smooth" });
    toast.success("Product added to cart!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const goToDetail = (item) => {
    navigate(`/product/${item.id}`, { state: { item } });
  };

  const content = clothes?.map((item) => (
    <div
      key={item.id}
      className="p-4 flex flex-col justify-center w-[400px] shadow"
    >
      <div className="flex flex-col justify-center items-center">
        <img
          src={item.image}
          alt={item.title}
          className="w-[400px] h-[300px] object-contain mb-2 transition hover:scale-110"
          onClick={() => goToDetail(item)}
        />
        <p className="font-medium h-[70px] w-[400px] text-gray-950 pl-6 pt-1">
          {item.title}
        </p>
      </div>
      <div className="flex justify-between items-center py-2 text-gray-900">
        <p>${item.price}</p>
        <p>
          {item.rating.rate} ({item.rating.count})
        </p>
      </div>
      <button
        onClick={() => buyHandler(item)}
        className="bg-gray-200 p-2 rounded-md hover:bg-white transition hover:scale-110"
      >
        buy
      </button>
    </div>
  ));

  return clothes && clothes.length > 0 ? (
    <section
      className={`grid grid-cols-3 gap-6 mx-auto w-full max-w-7xl mt-20 transition-all duration-500 ${
        animateSection ? "animate-fadeInUp" : "opacity-0"
      }`}
    >
      {content}
      <ToastContainer />
    </section>
  ) : (
    <div className="flex justify-center items-center min-h-screen">
      <Loading />
    </div>
  );
}
