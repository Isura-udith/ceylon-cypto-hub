import React, { useState } from 'react';

const Contact = () => {
  const [coinid, setCoinid] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const backendUrl = 'http://localhost:5000';

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${backendUrl}/close-trade`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ coinid, email, message }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit trade close form');
      }

      const data = await response.json();
      setSuccess('Trade closed successfully');
      setCoinid('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setError('Failed to submit trade close form. Please try again.');
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-red-600">Trade close form</h1>
        {success && <p className="text-green-500">{success}</p>}
        {error && <p className="text-red-500">{error}</p>}
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label>
              <span className="text-gray-200">Trade ID</span>
              <input
                type="text"
                value={coinid}
                onChange={(e) => setCoinid(e.target.value)}
                className="block w-full px-16 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="66a94cf88c09c5cbbc0689b4"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-200">Email address</span>
              <input
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-16 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="isura@gmail.com"
                required
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-200">Message</span>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="block w-full px-16 py-8 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                rows="1"
              ></textarea>
            </label>
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-red-600 rounded-lg focus:shadow-outline hover:bg-indigo-800"
            >
              Close trade
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
