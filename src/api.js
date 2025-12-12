import axios from "axios";

const OMDB_KEY = import.meta.env.VITE_OMDB_API_KEY || "";
const OMDB_BASE = "https://www.omdbapi.com/";

/**
  searchMovies(query)
  OMDb search: ?apikey=KEY&s=QUERY&type=movie&page=1
  if no key present we simulate latency and throw to let UI show demo fallback
 */
export async function searchMovies(query) {
  if (!OMDB_KEY) {
    // simulate latency then throw to trigger demo fallback in UI
    await new Promise((r) => setTimeout(r, 300));
    throw new Error("No OMDb key configured");
  }

  const resp = await axios.get(OMDB_BASE, {
    params: {
      apikey: OMDB_KEY,
      s: query,
      type: "movie",
      page: 1
    },
    timeout: 8000
  });

  if (!resp.data) return [];

  if (resp.data.Response === "False") {
    // no results
    return [];
  }

  const results = resp.data.Search || [];

  // Map to the shape used by the UI
  return results.map((m) => ({
    id: m.imdbID,
    title: m.Title,
    overview: "", // search endpoint doesn't include plot
    poster_path: m.Poster && m.Poster !== "N/A" ? m.Poster : null,
    release_date: m.Year || null,
    popularity: null
  }));
}


 // getMovieDetails(imdbID)
  //return full details (plot, runtime, genre and rating)
 
export async function getMovieDetails(imdbID) {
  if (!OMDB_KEY) throw new Error("No OMDb key configured");
  const resp = await axios.get(OMDB_BASE, {
    params: {
      apikey: OMDB_KEY,
      i: imdbID,
      plot: "full"
    },
    timeout: 8000
  });

  if (resp.data && resp.data.Response === "True") {
    return {
      id: resp.data.imdbID,
      title: resp.data.Title,
      overview: resp.data.Plot,
      poster_path: resp.data.Poster && resp.data.Poster !== "N/A" ? resp.data.Poster : null,
      release_date: resp.data.Year,
      popularity: resp.data.imdbRating || null,
      runtime: resp.data.Runtime || null,
      genre: resp.data.Genre || null,
      actors: resp.data.Actors || null,
      director: resp.data.Director || null
    };
  }
  return null;
}
