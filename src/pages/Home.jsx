import React, { useState } from 'react';
import Card from '../components/Card';
import useFetch from '../hooks/useFetch';
import { saveToWishlist } from '../utils/localStorage';

export default function Home() {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');
  const [rating, setRating] = useState('');
  const [url, setUrl] = useState('https://api.jikan.moe/v4/anime?q=naruto');

  const { data, loading } = useFetch(url);

  const handleSearch = () => {
    const params = [`q=${query}`];
    if (type) params.push(`type=${type}`);
    if (status) params.push(`status=${status}`);
    if (rating) params.push(`rating=${rating}`);
    const apiUrl = `https://api.jikan.moe/v4/anime?${params.join('&')}`;
    setUrl(apiUrl);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border px-2 py-1 col-span-2"
          placeholder="Search anime..."
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-1 rounded col-span-2 md:col-span-1">Search</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-4">
        <select onChange={(e) => setType(e.target.value)} className="border px-2 py-1">
          <option value="">All Types</option>
          <option value="tv">TV</option>
          <option value="movie">Movie</option>
          <option value="ova">OVA</option>
          <option value="special">Special</option>
          <option value="ona">ONA</option>
          <option value="music">Music</option>
        </select>

        <select onChange={(e) => setStatus(e.target.value)} className="border px-2 py-1">
          <option value="">All Status</option>
          <option value="airing">Airing</option>
          <option value="complete">Completed</option>
          <option value="upcoming">Upcoming</option>
        </select>

        <select onChange={(e) => setRating(e.target.value)} className="border px-2 py-1">
          <option value="">All Ratings</option>
          <option value="g">G - All Ages</option>
          <option value="pg">PG - Children</option>
          <option value="pg13">PG-13</option>
          <option value="r17">R - 17+</option>
          <option value="r">R+ - Mild Nudity</option>
          <option value="rx">Rx - Hentai</option>
        </select>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data?.data?.map((item) => (
            <Card key={item.mal_id} item={item} onAddToWishlist={saveToWishlist} />
          ))}
        </div>
      )}
    </div>
  );
}
