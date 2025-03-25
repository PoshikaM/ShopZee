import React from "react";
import { Link } from "react-router-dom";
import { FaTruck, FaHeadset, FaLock, FaUndo } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-gray-100 flex items-center justify-center p-6 mt-4">
      <div className="max-w-5xl bg-white p-10 rounded-3xl shadow-2xl border border-gray-200">
        <h1 className="text-5xl font-extrabold mb-6 text-center">About Us</h1>
        <p className="text-gray-600 text-lg text-center mb-8">
          Welcome to <span className="font-semibold text-indigo-600">ShopZee</span>, your ultimate destination for quality products💯 and a seamless shopping experience! 🛍️
        </p>

        {/* Our Mission & Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
          <div className="bg-indigo-50 p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
              ⚡ Our Mission
            </h2>
            <p className="text-gray-600 mt-2">
              To provide top-notch products at unbeatable prices while ensuring excellent customer service and a smooth shopping experience.
            </p>
          </div>

          <div className="bg-indigo-50 p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
              🌟 Why Choose Us?
            </h2>
            <ul className="text-gray-600 mt-2 list-disc list-inside">
              <li>Premium quality products</li>
              <li>Fast and reliable delivery</li>
              <li>Exceptional customer support</li>
              <li>Secure and seamless transactions</li>
            </ul>
          </div>
        </div>

        {/* Our Services */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <FaTruck className="text-indigo-600 text-4xl mx-auto mb-4" />
              <h3 className="text-lg font-semibold">Fast Delivery</h3>
              <p className="text-gray-600 text-sm mt-1">Get your orders delivered at lightning speed! 🚀</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <FaHeadset className="text-indigo-600 text-4xl mx-auto mb-4" />
              <h3 className="text-lg font-semibold">24/7 Support</h3>
              <p className="text-gray-600 text-sm mt-1">We’re here for you, anytime, anywhere! 💬</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <FaLock className="text-indigo-600 text-4xl mx-auto mb-4" />
              <h3 className="text-lg font-semibold">Secure Payments</h3>
              <p className="text-gray-600 text-sm mt-1">Your transactions are safe with us! 🔒</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <FaUndo className="text-indigo-600 text-4xl mx-auto mb-4" />
              <h3 className="text-lg font-semibold">Easy Returns</h3>
              <p className="text-gray-600 text-sm mt-1">Hassle-free returns for a worry-free shopping experience. 🔄</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Join Us Today!</h2>
          <p className="text-gray-600 mt-2">
            Shop with confidence and experience hassle-free online shopping.
          </p>
          <Link to="/">
            <button className="mt-6 bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-all shadow-md text-lg">
              Start Shopping 🛒
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;