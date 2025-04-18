import React, { useEffect, useState } from 'react';
import { getWishlist, removeFromWishlist } from '../utils/localStorage';
import Card from '../components/Card';

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    setWishlist(getWishlist());
  }, []);

  const handleRemove = (item) => {
    removeFromWishlist(item);
    setWishlist(getWishlist());
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Wishlist</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {wishlist.map((item) => (
          <Card key={item.mal_id} item={item} onAddToWishlist={handleRemove} />
        ))}
      </div>
    </div>
  );
}