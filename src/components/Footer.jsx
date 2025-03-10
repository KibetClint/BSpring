// src/components/layout/Footer.jsx

import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-green-400">
              Brickspring Enterprises
            </h3>
            <p className="text-gray-300">
              Revolutionizing weight-scale integration with cutting-edge computing solutions. 
              <br />
              <span className="block mt-2 font-medium">
                "Your tagline or short description here."
              </span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services#service1"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  IoT Scale Integration
                </Link>
              </li>
              <li>
                <Link
                  to="/services#service2"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  AI-Driven Insights
                </Link>
              </li>
              <li>
                <Link
                  to="/services#service3"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Custom Software
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-gray-300 leading-7">
              <p>123 Business Street</p>
              <p>City, State 12345</p>
              <p className="mt-2">Email: info@brickspring.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} Brickspring Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
