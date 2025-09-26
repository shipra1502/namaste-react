import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <header className="bg-pink-100 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="logo-container">
          <img className="w-48 md:w-56" src={LOGO_URL} alt="Logo" />
        </div>

        {/* Navigation & Status */}
        <nav className="flex items-center space-x-6">
          {/* Online Status Badge */}
          <div className="flex items-center space-x-2">
            <span className="font-medium text-gray-700">Status:</span>
            <span
              className={`px-2 py-1 rounded-full text-white font-semibold text-sm ${
                onlineStatus ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {onlineStatus ? "Online" : "Offline"}
            </span>
          </div>

          <ul className="flex space-x-4">
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                Cart
              </Link>
            </li>
          </ul>

          {/* Login Button */}
          <button
            onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
            className="ml-4 px-4 py-2 bg-white text-pink-500 font-semibold rounded-lg shadow hover:bg-pink-50 transition-colors duration-200"
          >
            {btnName}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
