import React, { useState } from "react";
import PlaylistFilter from "../playlist/PlayListFilter";
import PlaylistResults from "../playlist/PlayListResults";
import { fetchPlaylists } from "../api/Spotify";

export default function PlaylistViewer() {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFilter = async ({ mood, pace }) => {
    setLoading(true);
    const query = mood || pace ? `${mood} ${pace}` : "running music";
    const results = await fetchPlaylists(query);
    setPlaylists(results);
    setLoading(false);
  };

  return (
    <div className="playlist-viewer">
      <h2>Find Your Running Playlist</h2>
      <PlaylistFilter onFilter={handleFilter} />
      {loading ? <p>Loading...</p> : <PlaylistResults playlists={playlists} />}
    </div>
  );
}
