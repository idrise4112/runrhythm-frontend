import { useEffect } from "react";

export default function SpotifyPlayer() {
  useEffect(() => {
    // Define the callback BEFORE loading the SDK
    window.onSpotifyWebPlaybackSDKReady = () => {
      const token = localStorage.getItem("authToken");
      if (!token || !window.Spotify) {
        console.error("Spotify SDK not ready or token missing");
        return;
      }

      const player = new window.Spotify.Player({
        name: "RunRhythm Player",
        getOAuthToken: cb => cb(token),
        volume: 0.8,
      });

      player.addListener("ready", ({ device_id }) => {
        console.log("Spotify Player is ready with device ID:", device_id);
      });

      player.addListener("not_ready", ({ device_id }) => {
        console.warn("Spotify Player went offline:", device_id);
      });

      player.connect();
    };

    // Dynamically load the SDK script
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Optional cleanup
      delete window.onSpotifyWebPlaybackSDKReady;
    };
  }, []);

  return null;
}