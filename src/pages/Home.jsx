import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import useFetch from '../hooks/useFetch';
import { saveToWishlist } from '../utils/localStorage';

export default function Home() {
  const [query, setQuery] = useState('');
  const [url, setUrl] = useState('https://api.jikan.moe/v4/anime?q=naruto');
  const { data, loading } = useFetch(url);

  const handleSearch = () => {
    setUrl(`https://api.jikan.moe/v4/anime?q=${query}`);
  };

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-4">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border px-2 py-1 w-full"
          placeholder="Search anime..."
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-1">Search</button>
      </div>
      {loading ? <p>Loading...</p> : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data?.data?.map((item) => (
            <Card key={item.mal_id} item={item} onAddToWishlist={saveToWishlist} />
          ))}
        </div>
      )}
    </div>
  );
}
