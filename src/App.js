import React, { useState, useEffect } from "react";
import Timeline from "./components/Timeline"
import Profile from "./components/Profile"
import Navbar from "./components/Navbar"

const App = () => {
  // Initialize variables
  let completedDays = 0;
  let totalDays = 0;

  // Initialize states
  const [progress, setProgress] = useState(0);

  // Mock data, replace with database
  const [roadMap, setRoadMap] = useState([
    {
      title: "Plumbing",
      days: 2,
      jobCompleted: false
    },
    {
      title: "Floor Removal",
      days: 1,
      jobCompleted: false
    },
    {
      title: "Floor Installation",
      days: 2,
      jobCompleted: false
    },
    {
      title: "Painting",
      days: 2,
      jobCompleted: false
    }
  ]);

  // Determine project timeline
  roadMap.map(step => (totalDays += step.days));

  // Listen for any roadMap object property change
  useEffect(() => {
    // Count total days completed then update progress
    roadMap
      .filter(step => step.jobCompleted === true)
      .map(step => (completedDays += step.days));
    setProgress(Math.round(completedDays / totalDays * 100));
  }, [roadMap]);

  // Helper function
  const updateCompleted = (title, updatedStep) => {
    setRoadMap(
      roadMap.map(step => (step.title === title ? updatedStep : step))
    );
  };

  return (
    <div className="App h-screen" style={{background: '#F0F0F0'}}>
      <Navbar />
      <div className="relative">
        <Timeline updateCompleted={updateCompleted} roadMap={roadMap} progress={progress}/>
        <Profile />
      </div>
    </div>
  );
};

export default App;
