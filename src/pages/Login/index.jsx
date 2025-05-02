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
        className={`flex justify-center min-h-screen pt-20 ${
          animateSection ? "animate-fadeInRight" : "opacity-0"
        }`}
      >
        <div className="flex items-center justify-between flex-col h-[200px]">
          <p className="font-bold text-[20px] m-4">Login</p>
          <div className="w-[500px]">
            <label className="inline-block w-[80px]" htmlFor="email">
              email:
            </label>
            <input
              className="bg-gray-100 p-2 rounded-lg w-[400px] m-2"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-[500px]">
            <label className="inline-block w-[80px]" htmlFor="password">
              password:
            </label>
            <input
              className="bg-gray-100 p-2 rounded-lg w-[400px] m-2"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            onClick={handleLogin}
            className="bg-neutral-900 text-[#fff] w-[100%] py-[5px] my-2 text-center rounded-md hover:bg-white hover:text-black transition"
          >
            Login
          </button>
          <button onClick={goToSing}>
            Didn't you register?
            <span className="underline text-blue-500 m-2">Sing</span>
          </button>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Login;
