export function redirectToSpotifyLogin() {
  const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const REDIRECT_URI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;

  const SCOPES = [
    "streaming",
    "user-read-email",
    "user-read-private",
    "user-read-playback-state",
    "user-modify-playback-state",
    "playlist-read-private",
    "playlist-read-collaborative",
  ].join(" ");

  const authUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(
    REDIRECT_URI
  )}&scope=${encodeURIComponent(SCOPES)}`;

  window.location.href = authUrl;
}