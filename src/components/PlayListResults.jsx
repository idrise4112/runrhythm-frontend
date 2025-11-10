import React from "react";

function PlaylistResults({ playlists }) {
  return (
    <div>
      {playlists.map((playlist) => (
        <div key={playlist.id}>
          <img src={playlist.images[0]?.url} alt={playlist.name} width="150" />
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
