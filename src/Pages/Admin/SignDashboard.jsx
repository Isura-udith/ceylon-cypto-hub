import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [updatedUser, setUpdatedUser] = useState({});

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user._id);
    setUpdatedUser(user);
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/user/${editingUser}`, updatedUser);
      setEditingUser(null);
      fetchUsers();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/user/${userId}`);
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  return (
    <div className="container p-4 pt-20 mx-auto">
      <h1 className="mb-4 text-2xl font-bold text-center">Admin Dashboard</h1>
      <table className="min-w-full bg-gray-800 border">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Phone</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="px-4 py-2 border">
                {editingUser === user._id ? (
                  <input
                    type="text"
                    name="name"
                    value={updatedUser.name}
                    onChange={handleChange}
                    className="p-1 border rounded"
                  />
                ) : (
                  user.name
                )}
              </td>
              <td className="px-4 py-2 border">
                {editingUser === user._id ? (
                  <input
                    type="email"
                    name="email"
                    value={updatedUser.email}
                    onChange={handleChange}
                    className="p-1 border rounded"
                  />
                ) : (
                  user.email
                )}
              </td>
              <td className="px-4 py-2 border">
                {editingUser === user._id ? (
                  <input
                    type="text"
                    name="phone"
                    value={updatedUser.phone}
                    onChange={handleChange}
                    className="p-1 border rounded "
                  />
                ) : (
                  user.phone
                )}
              </td>
              <td className="px-4 py-2 border">
                {editingUser === user._id ? (
                  <button
                    onClick={handleUpdate}
                    className="px-2 py-1 text-white bg-blue-500 rounded"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(user)}
                    className="px-2 py-1 text-white bg-yellow-500 rounded"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => handleDelete(user._id)}
                  className="px-2 py-1 ml-2 text-white bg-red-500 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;