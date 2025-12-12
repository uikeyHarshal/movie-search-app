import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieGrid from "./components/MovieGrid";
import MovieModal from "./components/MovieModal";
import { searchMovies } from "./api";

const DemoMovies = [
  {
    id: 1,
    title: "Demo Movie: Project Kickoff",
    overview: "This is a demo movie used when you don't have an API key.",
    poster_path: null,
    release_date: "2023-01-01"
  },
  {
    id: 2,
    title: "Demo Movie: Invoice Reminder",
    overview: "Second demo entry used as fallback example.",
    poster_path: null,
    release_date: "2022-11-12"
  }
];

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(null);

  async function handleSearch(q) {
    setQuery(q);
    if (!q || q.trim().length === 0) {
      setMovies([]);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await searchMovies(q);
      if (res && res.length) setMovies(res);
      else setMovies([]);
    } catch (e) {
      console.error(e);
      setError("Failed to fetch movies. Showing demo results.");
      setMovies(DemoMovies);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app">
      <header className="header">
        <h1>🎬 Movie Search App</h1>
        <p className="sub">Search movies by name (TMDB). Demo fallback if no key.</p>
      </header>

      <main className="container">
        <SearchBar onSearch={handleSearch} loading={loading} />
        {error && <div className="error">{error}</div>}
        <MovieGrid movies={movies} onSelect={(m) => setSelected(m)} />
      </main>

      {selected && (
        <MovieModal movie={selected} onClose={() => setSelected(null)} />
      )}

      <footer className="footer">
        <small>
          Tip: get a free TMDB key for full results (see README). Otherwise the app
          shows demo data.
        </small>
      </footer>
    </div>
  );
}
