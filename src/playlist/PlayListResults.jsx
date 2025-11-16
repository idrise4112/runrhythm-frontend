import React from "react";

function PlaylistResults({ playlists }) {
  if (!Array.isArray(playlists) || playlists.length === 0) {
    return <p>No playlists to display.</p>;
  }

  return (
    <div>
      {playlists
        .filter((playlist) => playlist && playlist.images)
        .map((playlist) => (
          <div key={playlist.id}>
            <img
              src={playlist.images?.[0]?.url}
              alt={playlist.name}
              width="150"
            />
            <h3>{playlist.name}</h3>
            <p>{playlist.description}</p>
            <a
              href={playlist.external_urls.spotify}
              target="_blank"
              rel="noreferrer"
            >
              Open in Spotify
            </a>
          </div>
        ))}
    </div>
  );
}

export default PlaylistResults;
