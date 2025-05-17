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
        className={`flex justify-center items-center min-h-screen pt-20 px-4 ${
          animateSection ? "animate-fadeInLeft" : "opacity-0"
        }`}
      >
        <div className="flex flex-col w-full max-w-md bg-white p-6 rounded-md shadow">
          <p className="font-bold text-[24px] text-center mb-6">Sign Up</p>

          {/* Name */}
          <div className="mb-4">
            <label className="block mb-1 font-medium" htmlFor="name">
              Name:
            </label>
            <input
              className="bg-gray-100 p-2 rounded-lg w-full"
              type="text"
              id="name"
              name="name"
              onChange={handleInputChange}
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block mb-1 font-medium" htmlFor="email">
              Email:
            </label>
            <input
              className="bg-gray-100 p-2 rounded-lg w-full"
              type="email"
              id="email"
              name="email"
              onChange={handleInputChange}
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block mb-1 font-medium" htmlFor="password">
              Password:
            </label>
            <input
              className="bg-gray-100 p-2 rounded-lg w-full"
              type="password"
              id="password"
              name="password"
              onChange={handleInputChange}
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="bg-neutral-900 text-white w-full py-2 rounded-md hover:bg-white hover:text-black border border-neutral-900 transition"
          >
            Sign Up
          </button>

          {/* Go to Login */}
          <button onClick={goToLogin} className="mt-4 text-center text-sm">
            Already registered?
            <span className="underline text-blue-500 ml-1">Login</span>
          </button>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Sing;
