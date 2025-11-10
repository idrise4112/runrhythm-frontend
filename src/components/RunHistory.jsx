import React from "react";

export default function RunHistory({ history, onClear }) {
  return (
    <div>
      <h2>Run History</h2>
      {history.length === 0 ? (
        <p>No runs yet. Start tracking!</p>
      ) : (
        <ul>
          {history.map((run, index) => (
            <li key={index}>
              <strong>{run.date}</strong> — Mood: {run.mood}, Pace: {run.pace}
            </li>
          ))}
        </ul>
      )}
      {history.length > 0 && <button onClick={onClear}>Clear History</button>}
    </div>
  );
}
