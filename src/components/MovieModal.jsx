import React, { useEffect, useState } from "react";
import { getMovieDetails } from "../api";

export default function MovieModal({ movie, onClose }) {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    let mounted = true;
    async function fetchDetails() {
      if (!movie || !movie.id) return;
      setLoading(true);
      setErr(null);
      setDetails(null);
      try {
        const data = await getMovieDetails(movie.id);
        if (mounted) setDetails(data);
      } catch (e) {
        console.error("Failed to fetch movie details", e);
        if (mounted) setErr("Could not load details (API error).");
      } finally {
        if (mounted) setLoading(false);
      }
    }
    fetchDetails();
    return () => { mounted = false; };
  }, [movie]);

  if (!movie) return null;

  return (
    <div style={{
      position:'fixed',inset:0,display:'flex',alignItems:'center',justifyContent:'center',
      background:'rgba(2,6,23,0.6)',padding:20,zIndex:9999
    }}>
      <div style={{width:'min(900px,96%)',background:'#fff',borderRadius:10,padding:18,position:'relative',maxHeight:'90vh',overflow:'auto'}}>
        <button onClick={onClose} style={{position:'absolute',right:12,top:12,border:0,background:'transparent',fontSize:18,cursor:'pointer'}}>✕</button>

        {loading && <div style={{padding:20}}>Loading details…</div>}
        {err && <div style={{padding:20,color:'#b91c1c'}}>{err}</div>}

        {!loading && !err && (
          <div style={{display:'flex',gap:16}}>
            {details?.poster_path ? (
              <img src={details.poster_path} alt={details.title} style={{width:220,height:330,objectFit:'cover',borderRadius:8}} />
            ) : (
              <div style={{width:220,height:330,background:'#f3f4f6',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:8}}>
                <div style={{color:'#9ca3af'}}>No image</div>
              </div>
            )}

            <div style={{flex:1}}>
              <h2 style={{marginTop:0}}>{details?.title || movie.title}</h2>
              <div style={{color:'#6b7280',marginBottom:8}}>
                {details?.release_date} • {details?.runtime || "—"} • {details?.genre || ""}
              </div>

              <p style={{lineHeight:1.6}}>
                {details?.overview || movie.overview || "No description available."}
              </p>

              <div style={{marginTop:12, display:'flex', gap:12, flexWrap:'wrap'}}>
                {details?.popularity && <div><strong>Rating:</strong> {details.popularity}</div>}
                {details?.director && <div><strong>Director:</strong> {details.director}</div>}
                {details?.actors && <div><strong>Actors:</strong> {details.actors}</div>}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
