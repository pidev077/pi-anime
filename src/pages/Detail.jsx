import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Detail() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime/${id}`)
      .then((res) => res.json())
      .then((data) => setAnime(data.data));
  }, [id]);

  if (!anime) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{anime.title}</h1>
      <img src={anime.images.jpg.image_url} alt={anime.title} className="my-4" />
      <p>{anime.synopsis}</p>
      {anime.trailer?.embed_url && (
        <div className="mt-4">
          <iframe src={anime.trailer.embed_url} width="560" height="315" allowFullScreen></iframe>
        </div>
      )}
    </div>
  );
}
