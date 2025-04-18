import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">Anime App</h1>
      <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/wishlist">My Wishlist</Link>
      </nav>
    </header>
  );
}