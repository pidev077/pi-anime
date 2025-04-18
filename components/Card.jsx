import React from 'react';

export default function Card({ item, onAddToWishlist }) {
  return (
    <div className="bg-white shadow rounded p-4">
      <img src={item.images.jpg.image_url} alt={item.title} className="w-full h-64 object-cover" />
      <h2 className="font-bold mt-2">{item.title}</h2>
      <p>Type: {item.type}</p>
      <p>Rating: {item.rating}</p>
      <button
        onClick={() => onAddToWishlist(item)}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Add to Wishlist
      </button>
    </div>
  );
}