import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
  
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      if (response.data.success) {
        // Store the token
        localStorage.setItem('token', response.data.token);
        // Redirect to the dashboard or homepage
        navigate("/userdashboard", { state: { id: email } });
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };  

  return (
    <div className="flex items-center justify-center w-full h-screen px-5 sm:px-0">
      <div className="flex w-full max-w-sm overflow-hidden bg-white border rounded-lg shadow-lg lg:max-w-4xl">
        <div
          className="hidden bg-blue-700 bg-cover md:block lg:w-1/2"
          style={{
            backgroundImage: `url(https://img.freepik.com/free-vector/modern-bitcoin-design_1035-9520.jpg?w=740&t=st=1720650068~exp=1720650668~hmac=1adf07838aa0114ebf1bb2632019e33ede3dcf6f77d2b9eae719fb8b426e7e00)`,
          }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <p className="text-xl text-center text-gray-600">Welcome</p>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Email Address
              </label>
              <input
                className="block w-full px-4 py-2 text-gray-700 border border-gray-300 rounded focus:outline-2 focus:outline-blue-700"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col justify-between mt-4">
              <div className="flex justify-between">
                <label className="block mb-2 text-sm font-bold text-gray-700">
                  Password
                </label>
              </div>
              <input
                className="block w-full px-4 py-2 text-gray-700 border border-gray-300 rounded focus:outline-2 focus:outline-blue-700"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <a
                href="#"
                className="w-full mt-2 text-xs text-gray-500 hover:text-gray-900 text-end"
              >
                Forget Password?
              </a>
            </div>
            {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
            <div className="mt-8">
              <button
                type="submit"
                className="w-full px-4 py-2 font-bold text-white bg-blue-700 rounded hover:bg-blue-600"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Login"}
              </button>
            </div>
          </form>
          <a
            href="#"
            className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
          >
            <div className="flex justify-center w-full px-5 py-3">
              <div className="min-w-[30px]">
                <svg className="w-6 h-6" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>
              </div>
              <div className="flex justify-center w-full">
                <h1 className="font-bold text-gray-600 whitespace-nowrap">
                  Sign in with Google
                </h1>
              </div>
            </div>
          </a>
          <div className="flex items-center w-full mt-4 text-center">
            <a
              href="#"
              className="w-full text-xs text-center text-gray-500 capitalize"
            >
              Don&apos;t have any account yet?
              <Link to="/signup"><span className="text-blue-700"> Sign Up</span></Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
