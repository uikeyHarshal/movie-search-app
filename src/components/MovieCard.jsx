import React from "react";

export default function MovieCard({ movie, onSelect }) {
  const poster = movie.poster_path || null;
  return (
    <div className="card" role="listitem">
      {poster ? (
        <img className="poster" src={poster} alt={movie.title} />
      ) : (
        <div className="poster" style={{display:'flex',alignItems:'center',justifyContent:'center',color:'#9ca3af'}}>
          <div style={{padding:12,textAlign:'center'}}>
            <div style={{fontWeight:700}}>{movie.title}</div>
            <div style={{fontSize:13,marginTop:6,color:'#9ca3af'}}>{movie.release_date || "—"}</div>
          </div>
        </div>
      )}
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:8}}>
        <button onClick={() => onSelect(movie)} style={{background:'transparent',border:0,color:'#2563eb',cursor:'pointer'}}>Details</button>
        <span className="badge">{movie.release_date ? movie.release_date.slice(0,4) : "N/A"}</span>
      </div>
    </div>
  );
}
