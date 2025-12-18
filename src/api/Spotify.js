import axios from "axios";

const BASE_URL = "https://api.spotify.com/v1";

const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

console.log("CLIENT_ID:", CLIENT_ID);
console.log("CLIENT_SECRET:", CLIENT_SECRET);

async function getAccessToken() {
  console.log(CLIENT_ID, CLIENT_SECRET);
  if (!CLIENT_ID || !CLIENT_SECRET) {
    throw new Error("Missing Spotify client credentials");
  }

  const encodedCredentials = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);

  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    "grant_type=client_credentials",
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${encodedCredentials}`,
      },
    }
  );

  return response.data.access_token;
}

export async function fetchPlaylists(query) {
  try {
    const token = await getAccessToken();

    const response = await axios.get(`${BASE_URL}/search`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: query,
        type: "playlist",
        limit: 10,
      },
    });

    return response.data.playlists.items;
  } catch (error) {
    console.error("Spotify API error:", error.response?.data || error.message);
    return [];
  }
}
