import React, {useState} from "react";

const Signup = () => {

  const mybackendurl = 'http://localhost:5000';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    try {
      let res = await fetch(mybackendurl + '/signup', {
        method: 'POST',
        body: JSON.stringify({ email, password, name, phone }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      let result = await res.json();
      console.log(result);

      if (res.ok) {
        alert('User registered successfully');
        setEmail('');
        setPassword('');
        setName('');
        setPhone('');
        setError('');
      } else {
        setError(result.message);
      }
    } catch (error) {
      console.error('Failed to fetch:', error);
      setError('Failed to register. Please try again.');
    }
  };
    
  return (
    <div className="h-[100vh] items-center flex justify-center px-5 lg:px-0">
      <div className="flex justify-center flex-1 max-w-screen-xl bg-white border shadow sm:rounded-lg">
        <div className="flex-1 hidden max-w-screen-lg text-center bg-white rounded-lg md:flex">
          <div
            className="w-full m-12 bg-center bg-no-repeat bg-contain xl:m-16"
            style={{
              backgroundImage: `url(https://cdn.pixabay.com/photo/2018/04/25/22/48/bitcoin-3350797_1280.png)`,
            }}
          ></div>
        </div>
        <div className="p-6 lg:w-1/2 xl:w-5/12 sm:p-12">
          <div className="flex flex-col items-center ">
            <div className="text-center">
              <h1 className="text-2xl font-extrabold text-blue-900 xl:text-4xl">
                 Sign up
              </h1>
              <p className="text-[12px] text-gray-500 pt-2">
                Hey enter your details to create your account
              </p>
            </div>
            <div className="flex-1 w-full mt-8">
              <div className="flex flex-col max-w-xs gap-4 mx-auto">

              {error && <p style={{ color: 'red' }}>{error}</p>}
                
                <input
                  className="w-full px-5 py-3 text-sm font-medium text-blue-800 placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                
                <input
                  className="w-full px-5 py-3 text-sm font-medium text-blue-800 placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                
                <input
                  className="w-full px-5 py-3 text-sm font-medium text-blue-800 placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="tel"
                  placeholder="Enter your phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                
                <input
                  className="w-full px-5 py-3 text-sm font-medium text-blue-800 placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                
                <button onClick={handleRegister} className="flex items-center justify-center w-full py-4 mt-5 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out bg-blue-900 rounded-lg hover:bg-indigo-700 focus:shadow-outline focus:outline-none">
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Sign Up</span>
                </button>
                
                <p className="mt-6 text-xs text-center text-gray-600">
                  Already have an account?{" "}
                  <a href="./Login/Login.jsx">
                    <span className="font-semibold text-blue-900">Sign in</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;



