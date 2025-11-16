import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import PlaylistViewer from "./playlist/PlayListViewer";
import RunTracker from "./run/RunTracker";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SpotifyCallback from "./pages/SpotifyCallback";

function App() {
  return (
    <Router>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/playlists" element={<PlaylistViewer />} />
        <Route path="/tracker" element={<RunTracker />} />
        <Route path="/callback" element={<SpotifyCallback />} /> {}
      </Routes>
    </Router>
  );
}

export default App;
