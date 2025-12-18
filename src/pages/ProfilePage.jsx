import React, { useState, useEffect } from "react";
import RunHistory from "../run/RunHistory";

export default function ProfilePage() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("runHistory")) || [];
    setHistory(saved);
  }, []);

  const handleClear = () => {
    localStorage.removeItem("runHistory");
    setHistory([]);
  };

  return (
    <div className="ProfilePage-container">
      <h1>ProfilePage</h1>
      <p>Here’s your recent run history based on mood and pace filters.</p>
      <RunHistory history={history} onClear={handleClear} />
    </div>
  );
}
