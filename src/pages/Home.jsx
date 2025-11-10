import React, { useState, useEffect } from "react";
import PlaylistFilter from "../components/PlayListFilter";
import PlaylistResults from "../components/PlayListResults";
import { fetchPlaylists } from "../api/Spotify";

function Home() {
  const [playlists, setPlaylists] = useState([]);
  const [filtered, setFiltered] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load default playlists on first render
  useEffect(() => {
    async function loadDefaultPlaylists() {
      const results = await fetchPlaylists("running music");
      setPlaylists(results);
      setLoading(false);
    }
    loadDefaultPlaylists();
  }, []);

  const handleFilter = async ({ mood, pace }) => {
    setLoading(true);
    const query = mood || pace ? `${mood} ${pace}` : "running music";
    const results = await fetchPlaylists(query);
    setPlaylists(results);
    setFiltered(true);
    setLoading(false);
  };

  return (
    <div className="home-container">
      <h1>RunRhythm</h1>
      <PlaylistFilter onFilter={handleFilter} />
      {loading ? (
        <p>Loading playlists...</p>
      ) : (
        <>
          {!filtered && <h2>Suggested Playlists</h2>}
          {playlists.length > 0 ? (
            <PlaylistResults playlists={playlists} />
          ) : (
            <p>No playlists found. Try a different mood or pace.</p>
          )}
        </>
      )}
    </div>
  );
}

export default Home;
