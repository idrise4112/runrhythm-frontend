import React, { useState, useEffect } from "react";
import RunHistory from "../components/RunHistory";
import Navbar from "../components/Navbar";

export default function Dashboard() {
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
    <div className="dashboard-container">
      <Navbar />
      <h1>Dashboard</h1>
      <p>Here’s your recent run history based on mood and pace filters.</p>
      <RunHistory history={history} onClear={handleClear} />
    </div>
  );
}
