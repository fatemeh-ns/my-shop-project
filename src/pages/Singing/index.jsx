import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../../components/Context/AuthContext";
import "react-toastify/ReactToastify.css";

const Sing = () => {
  const { setIsLoggedIn } = useAuth();
  const [animateSection, setAnimateSection] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateSection(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addToLocalStorage = (info) => {
    localStorage.setItem("userInfo", JSON.stringify(info));
  };

  const handleSubmit = () => {
    if (userInfo.password.length < 8) {
      toast.error("Password must be at least 8 characters!", {
        position: "top-right",
        autoClose: 2000,
        theme: "light",
      });
      return;
    }

    setIsLoggedIn(true);
    addToLocalStorage(userInfo);
    window.scrollTo({ top: 0, behavior: "smooth" });
    toast.success("You are loginned!", {
      position: "top-right",
      autoClose: 2000,
      theme: "light",
    });
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const goToLogin = () => {
    navigate(`/login`);
  };

  return (
    <>
      <section
        className={`flex justify-center min-h-screen pt-20
      ${animateSection ? "animate-fadeInLeft" : "opacity-0"}`}
      >
        <div className="flex items-center justify-between flex-col h-[200px]">
          <p className="font-bold text-[20px] m-4">singn</p>
          <div className="w-[500px]">
            <label className="inline-block w-[80px]" htmlFor="name">
              name :
            </label>
            <input
              className="bg-gray-100 p-2 rounded-lg w-[400px] m-2"
              type="text"
              id="name"
              name="name"
              onChange={handleInputChange}
            />
          </div>
          <div className="w-[500px]">
            <label className="inline-block w-[80px]" htmlFor="email">
              email :
            </label>
            <input
              className="bg-gray-100 p-2 rounded-lg w-[400px] m-2"
              type="email"
              id="email"
              name="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="w-[500px]">
            <label className="inline-block w-[80px]" htmlFor="password">
              password :
            </label>
            <input
              className="bg-gray-100 p-2 rounded-lg w-[400px] m-2"
              type="password"
              id="password"
              name="password"
              onChange={handleInputChange}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-neutral-900 text-[#fff] w-[100%] py-[5px] my-2 text-center rounded-md hover:bg-white hover:text-black transition"
          >
            Sing
          </button>
          <button onClick={goToLogin}>
            Did you register?
            <span className="underline text-blue-500 m-2">Login</span>
          </button>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Sing;
