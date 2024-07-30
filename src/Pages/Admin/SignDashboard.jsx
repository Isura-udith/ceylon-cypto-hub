import React, { useState, useEffect } from 'react';

const SignDashboard = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', password: '' });
  const backendUrl = 'http://localhost:5000'; 


  const fetchUsers = async () => {
    try {
      const response = await fetch(`${backendUrl}/admin/users`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
      setError('Failed to fetch users. Please try again later.');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone,
      password: '', 
    });
  };


  const handleSave = async () => {
    try {
      const response = await fetch(`${backendUrl}/admin/user/${selectedUser._id}`, {
        method: 'PUT',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to update user');
      }

      await fetchUsers(); 
      setSelectedUser(null);
      setFormData({ name: '', email: '', phone: '', password: '' });
    } catch (error) {
      console.error('Error updating user:', error);
      setError('Failed to update user. Please try again.');
    }
  };

  
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${backendUrl}/admin/user/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete user');
      }

      await fetchUsers(); 
    } catch (error) {
      console.error('Error deleting user:', error);
      setError('Failed to delete user. Please try again.');
    }
  };

  return (
    <div className="h-full p-5 lg:p-10">
      <h1 className="pt-20 pb-4 mb-4 text-3xl font-bold text-center">Admin Dashboard</h1>
      {error && <p className="text-red-500">{error}</p>}

      <div className="m-4 mb-6 overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-400 ">
            <tr>
              <th scope="col" className="px-6 py-3 text-xl font-bold tracking-wider text-left text-black uppercase">Name</th>
              <th scope="col" className="px-6 py-3 text-xl font-bold tracking-wider text-left text-black uppercase">Email</th>
              <th scope="col" className="px-6 py-3 text-xl font-bold tracking-wider text-left text-black uppercase">Phone</th>
              <th scope="col" className="px-6 py-3 text-xl font-bold tracking-wider text-left text-black uppercase">Registered At</th>
              <th scope="col" className="px-6 py-3 text-xl font-bold tracking-wider text-left text-black uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.length > 0 ? (
              users.map(user => (
                <tr key={user._id}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{user.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{user.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{user.phone}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{new Date(user.createdAt).toLocaleDateString()}</td>
                  <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                    <button onClick={() => handleEditClick(user)} className="text-blue-600 hover:text-blue-900">Edit</button>
                    <button onClick={() => handleDelete(user._id)} className="ml-4 text-red-600 hover:text-red-900">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-sm text-center text-gray-500">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {selectedUser && (
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-xl font-semibold">Edit User</h2>
          <input
            className="w-full px-5 py-3 mb-4 text-sm font-medium text-blue-800 placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            className="w-full px-5 py-3 mb-4 text-sm font-medium text-blue-800 placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <input
            className="w-full px-5 py-3 mb-4 text-sm font-medium text-blue-800 placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg"
            type="tel"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
          <input
            className="w-full px-5 py-3 mb-4 text-sm font-medium text-blue-800 placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg"
            type="password"
            placeholder="Password (leave blank to keep unchanged)"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <button onClick={handleSave} className="px-4 py-2 text-white bg-blue-500 rounded">Save Changes</button>
          <button onClick={() => setSelectedUser(null)} className="px-4 py-2 ml-4 text-white bg-gray-500 rounded">Cancel</button>
        </div>
      )}
    </div>
  );
};

export default SignDashboard;