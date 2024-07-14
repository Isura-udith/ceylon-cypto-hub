import React, { useState } from 'react';

const Signup = () => {
  const mybackendurl = 'http://localhost:5000';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    try {
      let res = await fetch(mybackendurl + '/signup', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
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
    <div>
      <h1>Signup</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ color: 'black' }}
        placeholder="Email"
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ color: 'black' }}
        placeholder="Password"
      />
      <br />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Signup;
