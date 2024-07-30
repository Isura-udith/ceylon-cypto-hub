import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [tradeData, setTradeData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTradeData = async () => {
      try {
        const response = await fetch('http://localhost:5000/tradedata');
        if (!response.ok) {
          throw new Error('Failed to fetch trade data');
        }
        const data = await response.json();
        setTradeData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchTradeData();
  }, []);

  return (
    <div className="container items-center pt-20 mx-auto">
      <h1 className="pb-4 mb-4 text-2xl font-bold text-center">Trade Data Dashboard</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="m-4 mb-6 overflow-x-auto bg-white rounded-lg shadow-md">
      <table className="min-w-full bg-gray-800 ">
        <thead>
          <tr>
            <th className="px-4 py-2 text-xl font-bold tracking-wider text-left text-white border-b">Name</th>
            <th className="px-4 py-2 text-xl font-bold tracking-wider text-left text-white border-b">Number</th>
            <th className="px-4 py-2 text-xl font-bold tracking-wider text-left text-white border-b">Email</th>
            <th className="px-4 py-2 text-xl font-bold tracking-wider text-left text-white border-b">Completion Date</th>
            <th className="px-4 py-2 text-xl font-bold tracking-wider text-left text-white border-b">Pair</th>
            <th className="px-4 py-2 text-xl font-bold tracking-wider text-left text-white border-b">Amount</th>
            <th className="px-4 py-2 text-xl font-bold tracking-wider text-left text-white border-b">Card Name</th>
            <th className="px-4 py-2 text-xl font-bold tracking-wider text-left text-white border-b">Card Number</th>
            <th className="px-4 py-2 text-xl font-bold tracking-wider text-left text-white border-b">Expiry Date</th>
            
          </tr>
        </thead>
        <tbody>
          {tradeData.map((trade, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border-b">{trade.name}</td>
              <td className="px-4 py-2 border-b">{trade.number}</td>
              <td className="px-4 py-2 border-b">{trade.email}</td>
              <td className="px-4 py-2 border-b">{new Date(trade.completionDate).toLocaleDateString()}</td>
              <td className="px-4 py-2 border-b">{trade.pair}</td>
              <td className="px-4 py-2 border-b">{trade.amount}</td>
              <td className="px-4 py-2 border-b">{trade.cdname}</td>
              <td className="px-4 py-2 border-b">{trade.cdnumber}</td>
              <td className="px-4 py-2 border-b ">{trade.cddate}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Dashboard;
