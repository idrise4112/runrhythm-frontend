import React from "react";

function PlaylistResults({ playlists, onSelect, onSave }) {
  if (!Array.isArray(playlists) || playlists.length === 0) {
    return <p>No playlists to display.</p>;
  }

  return (
    <div className="playlist-results">
      {playlists
        .filter((playlist) => playlist && playlist.images)
        .map((playlist) => (
          <div key={playlist.id} className="playlist-card">
            <img
              src={playlist.images?.[0]?.url}
              alt={playlist.name}
              width="150"
            />
            <h3>{playlist.name}</h3>
            {playlist.description && <p>{playlist.description}</p>}
            <div className="playlist-actions">
              <a
                href={playlist.external_urls.spotify}
                target="_blank"
                rel="noreferrer"
              >
                Open in Spotify
              </a>
              <button onClick={() => onSelect(playlist)}>🎧 View Tracks</button>
              <button onClick={() => onSave(playlist)}>❤️ Save</button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default PlaylistResults;
