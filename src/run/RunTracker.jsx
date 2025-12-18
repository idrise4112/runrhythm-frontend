import React, { useState } from "react";

export default function RunTracker() {
  const [run, setRun] = useState({ mood: "", pace: "", distance: "" });

  const handleChange = (e) => {
    setRun({ ...run, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const history = JSON.parse(localStorage.getItem("runHistory")) || [];
    localStorage.setItem("runHistory", JSON.stringify([...history, run]));
    setRun({ mood: "", pace: "", distance: "" });
    alert("Run saved!");
  };

  return (
    <div className="tracker-container">
      <h2>Track Your Run</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Mood:
          <input
            name="mood"
            value={run.mood}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Pace:
          <input
            name="pace"
            value={run.pace}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Distance (mi):
          <input
            name="distance"
            value={run.distance}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Save Run</button>
      </form>
    </div>
  );
}
