import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formState, setFormState] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.id;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/user/${email}`);
        setUserData(response.data);
        setFormState(response.data);
      } catch (error) {
        setError('Failed to fetch user data');
      }
    };
    fetchUserData();
  }, [email]);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.put(`http://localhost:5000/user/${email}`, formState);
      setUserData(response.data);
      setError('');
      alert('Profile updated successfully');
    } catch (err) {
      setError('Failed to update user data');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="items-center pt-20 px-80 max-w-900">
    <div className="container mx-auto mt-10">
      <h1 className="items-center mb-4 text-2xl font-bold p-18">Dashboard</h1>
      {error && <p className="text-red-500">{error}</p>}
      {userData ? (
        <form onSubmit={handleSubmit} className="gap-6 p-8 space-y-4 font-semibold bg-slate-300 rounded-2xl">
          <div>
            <label className="block text-black">Name</label>
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              className="block w-full pl-4 text-blue-700 border-gray-300 rounded-md shadow-sm mt-1font-semibold text-20px size-8"
            />
          </div>
          <div>
            <label className="block text-black">Email</label>
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className="block w-full pl-4 text-blue-700 border-gray-300 rounded-md shadow-sm mt-1font-semibold text-20px size-8"
              readOnly
            />
          </div>
          <div>
            <label className="block text-black">Phone</label>
            <input
              type="text"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
              className="block w-full pl-4 text-blue-700 border-gray-300 rounded-md shadow-sm mt-1font-semibold text-20px size-8"
            />
          </div>
          <div>
            <label className="block font-semibold text-black">Password</label>
            <input
              type="password"
              name="password"
              placeholder='******'
              value={formState.password}
              onChange={handleChange}
              className="block w-full pl-4 text-blue-700 border-gray-300 rounded-md shadow-sm mt-1font-semibold text-20px size-8"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="px-4 py-2 font-bold text-white bg-blue-700 rounded hover:bg-blue-600"
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Update Profile'}
            </button>
            <button
              type="button"
              className="px-4 py-2 font-bold text-white bg-red-700 rounded hover:bg-red-600"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </div>
  );
};

export default UserDashboard;
