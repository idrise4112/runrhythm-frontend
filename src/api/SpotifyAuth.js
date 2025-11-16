export function redirectToSpotifyLogin() {
  const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const REDIRECT_URI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
  const SCOPES = [
    "playlist-read-private",
    "playlist-read-collaborative",
    "user-read-email",
    "user-read-private",
  ].join(" ");

  const authUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(
    REDIRECT_URI
  )}&scope=${encodeURIComponent(SCOPES)}`;

  window.location.href = authUrl;
}
