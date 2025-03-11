import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My App</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="/detailed" className="hover:text-gray-400">
              Detail
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const DetailedPage = ({ title, details }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto bg-gray-900 p-8 mt-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-gray-300">
          Ini adalah halaman detail yang bisa digunakan berkali-kali dengan data
          yang berbeda.
        </p>
        <div className="mt-6 border-t border-gray-700 pt-4">
          <h2 className="text-2xl font-semibold">Informasi Detail</h2>
          <ul className="mt-2 space-y-2 text-gray-400">
            {details.map((item, index) => (
              <li key={index}>📌 {item}</li>
            ))}
          </ul>
        </div>
        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition">
          Action Button
        </button>
      </div>
    </div>
  );
};

export default DetailedPage;
