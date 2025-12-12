import React from "react";
import MovieCard from "./MovieCard";

export default function MovieGrid({ movies = [], onSelect }) {
  if (!movies || movies.length === 0) {
    return <div style={{ color: "#6b7280", marginTop: 20 }}>No movies — try a different query.</div>;
  }

  return (
    <div className="grid" role="list">
      {movies.map((m) => (
        <MovieCard key={m.id} movie={m} onSelect={onSelect} />
      ))}
    </div>
  );
}
