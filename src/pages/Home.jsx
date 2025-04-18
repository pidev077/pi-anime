import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import useFetch from '../hooks/useFetch';
import { saveToWishlist } from '../utils/localStorage';

const types = ['tv', 'movie', 'ova', 'special', 'ona', 'music'];
const statuses = ['airing', 'complete'];
const ratings = ['g', 'pg', 'pg13', 'r17', 'r', 'rx'];

export default function Home() {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');
  const [rating, setRating] = useState('');
  const [url, setUrl] = useState('https://api.jikan.moe/v4/anime?q=naruto');

  const { data, loading } = useFetch(url);

  useEffect(() => {
    let q = query ? `q=${query}` : '';
    let t = type ? `&type=${type}` : '';
    let s = status ? `&status=${status}` : '';
    let r = rating ? `&rating=${rating}` : '';
    setUrl(`https://api.jikan.moe/v4/anime?${q}${t}${s}${r}`);
  }, [query, type, status, rating]);

  return (
   

    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Header */}
      <div className="w-full flex justify-between items-center p-4 bg-[#1e293b] shadow-md">
        <h1 className="text-2xl font-bold text-purple-400">ANIME EXPLORER</h1>
        <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md text-white">
          View Wishlist
        </button>
      </div>
return <h1 style={{ color: 'red' }}>Test React</h1>;


      {/* Main layout */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 p-4 bg-[#1e293b] hidden md:block">
          <h2 className="text-xl font-bold mb-4">Filter</h2>

          <div className="mb-4">
            <label className="block font-semibold mb-1">Type</label>
            {types.map((item) => (
              <div key={item} className="mb-1">
                <input
                  type="radio"
                  name="type"
                  value={item}
                  onChange={() => setType(item)}
                  checked={type === item}
                />{' '}
                {item.toUpperCase()}
              </div>
            ))}
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-1">Status</label>
            {statuses.map((item) => (
              <div key={item} className="mb-1">
                <input
                  type="radio"
                  name="status"
                  value={item}
                  onChange={() => setStatus(item)}
                  checked={status === item}
                />{' '}
                {item.toUpperCase()}
              </div>
            ))}
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-1">Rating</label>
            {ratings.map((item) => (
              <div key={item} className="mb-1">
                <input
                  type="radio"
                  name="rating"
                  value={item}
                  onChange={() => setRating(item)}
                  checked={rating === item}
                />{' '}
                {item.toUpperCase()}
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 md:p-6">
          {/* Search input */}
          <div className="flex gap-2 mb-4">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-[#1e293b] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Search for anime..."
            />
          </div>
        
          {/* Anime cards */}
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data?.data?.map((item) => (
                <Card
                  key={item.mal_id}
                  item={item}
                  onAddToWishlist={saveToWishlist}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
