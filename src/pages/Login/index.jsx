import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "../../components/Context/AuthContext";
import "react-toastify/ReactToastify.css";

const Login = () => {
  const [animateSection, setAnimateSection] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateSection(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const goToSing = () => {
    navigate(`/sing`);
  };

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("userInfo"));

    if (!storedUser) {
      toast.error("No registered user found!", { theme: "light" });
      return;
    }

    if (email === storedUser.email && password === storedUser.password) {
      setIsLoggedIn(true);
      toast.success("Login successful!", { theme: "light" });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      toast.error("Incorrect email or password!", { theme: "light" });
    }
  };

  return (
    <>
      <section
        className={`flex justify-center items-center min-h-screen pt-20 px-4 ${
          animateSection ? "animate-fadeInRight" : "opacity-0"
        }`}
      >
        <div className="flex flex-col w-full max-w-md bg-white p-6 rounded-md shadow">
          <p className="font-bold text-[24px] text-center mb-6">Login</p>

          {/* Email */}
          <div className="mb-4">
            <label className="block mb-1 font-medium" htmlFor="email">
              Email:
            </label>
            <input
              className="bg-gray-100 p-2 rounded-lg w-full"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="bg-neutral-900 text-white w-full py-2 rounded-md hover:bg-white hover:text-black border border-neutral-900 transition"
          >
            Login
          </button>

          {/* Link to Signup */}
          <button onClick={goToSing} className="mt-4 text-center text-sm">
            Didn't you register?
            <span className="underline text-blue-500 ml-1">Sign Up</span>
          </button>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Login;
