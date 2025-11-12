import React, { useState, useEffect } from 'react';
import './App.css'; // We will create this file
import StatCard from './components/StatCard';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [username, setUsername] = useState('');
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'

  useEffect(() => {
    // Apply theme class to body
    document.body.className = theme === 'dark' ? 'dark-mode' : 'light-mode';
  }, [theme]);

  const mockFetchStats = (playerUsername) => {
    setLoading(true);
    setError('');
    setStats(null);

    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        if (playerUsername.toLowerCase() === 'testplayer') {
          resolve({
            wins: 123,
            kills: 4567,
            kdRatio: 2.5,
            matchesPlayed: 1500,
            averageDamage: 350.7,
          });
        } else if (playerUsername.toLowerCase() === 'errorplayer') {
          // Simulate an error
          resolve(null);
        }
        else {
          resolve({
            wins: Math.floor(Math.random() * 500),
            kills: Math.floor(Math.random() * 10000),
            kdRatio: (Math.random() * 3 + 0.5).toFixed(2),
            matchesPlayed: Math.floor(Math.random() * 2000) + 100,
            averageDamage: (Math.random() * 400 + 100).toFixed(1),
          });
        }
      }, 1500); // Simulate network delay
    });
  };

  const handleGetStats = async () => {
    if (!username.trim()) {
      setError('Please enter a PUBG username.');
      setStats(null);
      return;
    }

    setLoading(true);
    const fetchedStats = await mockFetchStats(username);
    setLoading(false);

    if (fetchedStats) {
      setStats(fetchedStats);
    } else {
      setError('Could not fetch stats for this username. Try "testplayer".');
      setStats(null);
    }
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>PUBG Stats Tracker</h1>
        <button onClick={toggleTheme} className="theme-toggle-button">
          Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </header>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter PUBG Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="username-input"
        />
        <button onClick={handleGetStats} className="get-stats-button">
          Get Stats
        </button>
      </div>

      {loading && <LoadingSpinner />}

      {error && <p className="error-message">{error}</p>}

      {stats && (
        <div className="stats-grid">
          <StatCard label="Wins" value={stats.wins} />
          <StatCard label="Kills" value={stats.kills} />
          <StatCard label="K/D Ratio" value={stats.kdRatio} />
          <StatCard label="Matches Played" value={stats.matchesPlayed} />
          <StatCard label="Average Damage" value={stats.averageDamage} />
        </div>
      )}
    </div>
  );
}

export default App;