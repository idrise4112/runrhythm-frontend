import React, { useState } from "react";

export default function PlaylistFilter({ onFilter }) {
  const [mood, setMood] = useState("");
  const [pace, setPace] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ mood, pace });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Mood:
        <select value={mood} onChange={(e) => setMood(e.target.value)}>
          <option value="">Select</option>
          <option value="chill">Chill</option>
          <option value="hype">Hype</option>
        </select>
      </label>
      <label>
        Pace:
        <select value={pace} onChange={(e) => setPace(e.target.value)}>
          <option value="">Select</option>
          <option value="slow">Slow</option>
          <option value="fast">Fast</option>
        </select>
      </label>
      <button type="submit">Find Playlists</button>
    </form>
  );
}
