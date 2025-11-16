// src/pages/SpotifyCallback.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SpotifyCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    const token = new URLSearchParams(hash.substring(1)).get("access_token");

    if (token) {
      localStorage.setItem("spotifyAccessToken", token);
      navigate("/");
    } else {
      console.error("Spotify token not found");
    }
  }, [navigate]);

  return <p>Logging in with Spotify...</p>;
}
