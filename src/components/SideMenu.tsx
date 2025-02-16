"use client";

import Link from "next/link";
import { useState } from "react";

const SideMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-200 dark:bg-gray-800"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="p-8 mt-16">
          <Link
            href="/"
            className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded px-4"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded px-4"
          >
            About
          </Link>
        </nav>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default SideMenu;
