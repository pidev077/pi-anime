import React from 'react';

export default function Card({ item, onAddToWishlist }) {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-md bg-[#1e293b] hover:scale-[1.03] transition-transform duration-300">
      <img
        src={item.images?.jpg?.large_image_url}
        alt={item.title}
        className="w-full h-64 object-cover"
      />

      {/* Overlay bottom */}
      <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/80 to-transparent text-white">
        <h3 className="text-sm font-semibold truncate">{item.title}</h3>
        <div className="text-xs mt-1 opacity-80">
          {item.type?.toUpperCase()} {item.episodes ? `- ${item.episodes} eps` : ''}
        </div>
      </div>

      {/* Heart Button */}
      <button
        onClick={() => onAddToWishlist(item)}
        className="absolute top-2 right-2 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white"
        title="Add to Wishlist"
      >
        ❤️
      </button>
    </div>
  );
}
