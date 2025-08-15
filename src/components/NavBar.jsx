import React from 'react';
import { Link } from '@tanstack/react-router';
import { useNavigate } from '@tanstack/react-router';
const Navbar = () => {
  
  const navigate = useNavigate()
  return (
    <nav className="bg-white border border-b-black">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center justify-between w-full">
            <Link to="/" className="text-xl font-bold text-gray-800">
              URL Shortener
            </Link>
             <button
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            onClick={() => navigate({to: "/auth"})}
          >
            Sign In
          </button>
          </div>
          
          {/* Right side - Auth buttons */}
          <div className="flex items-center">
            {/* {(true) ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">Welcome, {userName || 'User'}</span>
                <button
                  onClick={onLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>
            )} */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;