import React from 'react';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <div className="p-10 bg-[#130e4a] bg-opacity-60 rounded-3xl shadow-xl text-center">
        <i className="fa fa-exclamation-triangle text-6xl text-red-600 mb-4"></i>
        <h1 className="text-4xl font-bold mb-2 text-gray-600">404</h1>
        <p className="text-lg text-gray-600 mb-6">Oops! The page you're looking for doesn't exist.</p>
        <button
          onClick={handleGoHome}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
