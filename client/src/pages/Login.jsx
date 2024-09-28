import React from 'react';
import LoginButton from 'Components/LoginButton';

const Login = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white rounded-lg shadow-md p-8 max-w-sm w-full">
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Please Log In
      </h1>
      <div className="flex justify-center">
        <LoginButton />
      </div>
    </div>
  </div>
);

export default Login;
