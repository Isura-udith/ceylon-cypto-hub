import React, { useEffect, useState } from 'react';

const TradeClose = () => {
  const [trades, setTrades] = useState([]);
  const [error, setError] = useState('');
  const backendUrl = 'http://localhost:5000'; // Adjust if necessary

  useEffect(() => {
    const fetchTrades = async () => {
      try {
        const response = await fetch(`${backendUrl}/admin/trades`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch trades');
        }

        const data = await response.json();
        setTrades(data);
      } catch (error) {
        setError('Failed to fetch trades. Please try again later.');
      }
    };

    fetchTrades();
  }, []);

  return (
    <div className="h-[100vh] p-5 lg:p-10">
      <h1 className="pt-20 pb-4 mb-4 text-2xl font-bold text-center">Trade Close Dashboard</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-500">
            <tr>
              <th scope="col" className="px-6 py-3 text-xl font-bold text-left text-black uppercase trackinldg-wider">Trade ID</th>
              <th scope="col" className="px-6 py-3 text-xl font-bold tracking-wider text-left text-black uppercase">Email</th>
              <th scope="col" className="px-6 py-3 text-xl font-bold tracking-wider text-left text-black uppercase">Message</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {trades.length > 0 ? (
              trades.map(trade => (
                <tr key={trade._id}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{trade.coinid}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{trade.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{trade.message}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="px-6 py-4 text-sm text-center text-gray-500">No trades found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TradeClose;
