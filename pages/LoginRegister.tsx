import React, { useState } from 'react';

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? '/api/login' : '/api/register';
    const res = await fetch(`http://localhost:4000${endpoint}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      }
    );
    const data = await res.json();
    setMessage(data.message);
    if (isLogin && res.ok) {
      // Optionally handle login success (e.g., redirect, store user info)
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xs p-8 bg-white rounded shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-700">{isLogin ? 'Login' : 'Register'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="w-full px-3 py-2 mb-4 border rounded"
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <input
            className="w-full px-3 py-2 mb-4 border rounded"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button
            className="w-full py-2 mb-4 font-bold text-white bg-green-600 rounded hover:bg-green-700"
            type="submit"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        <button
          className="w-full py-2 text-green-700 border border-green-600 rounded hover:bg-green-100"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? 'Create an account' : 'Already have an account? Login'}
        </button>
        {message && (
          <div className="mt-4 text-center text-red-600">{message}</div>
        )}
      </div>
    </div>
  );
};

export default LoginRegister;
