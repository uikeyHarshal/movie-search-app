import React, { useState } from "react";

export default function SearchBar({ onSearch, loading }) {
  const [q, setQ] = useState("");

  function submit(e) {
    e.preventDefault();
    onSearch(q);
  }

  return (
    <form className="searchBar" onSubmit={submit}>
      <input
        aria-label="Search movies"
        placeholder="Search movies (e.g. The Matrix)"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <button type="submit" disabled={loading}>{loading ? "Searching..." : "Search"}</button>
    </form>
  );
}
