import React, { useState, useEffect, useRef } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Dashboard.css';

const Dashboard = () => {
  const [quote, setQuote] = useState("Loading motivational quote...");
  const [streaks, setStreaks] = useState([]);
  const [selectedStreak, setSelectedStreak] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', target: '' });
  const [showCalendar, setShowCalendar] = useState(false);
  const isInitialMount = useRef(true);

  // Fetch quote from Quotable API
const fetchQuote = async () => {
  try {
    const proxyUrl = 'https://api.allorigins.win/get?url=' + encodeURIComponent('https://zenquotes.io/api/quotes');
    const response = await fetch(proxyUrl);
    const data = await response.json();
    const quotes = JSON.parse(data.contents);

    if (quotes && quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];
      setQuote(`"${randomQuote.q}" — ${randomQuote.a}`);
    }
  } catch (error) {
    console.error("Failed to fetch quote via proxy:", error);
    setQuote("Keep going. You're doing great!");
  }
};



  // Load a quote every 2 minutes
 useEffect(() => {
  fetchQuote();
  const interval = setInterval(fetchQuote, 2 * 60 * 1000);
  return () => clearInterval(interval);
}, []);

  // Load from localStorage on first mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('streaks')) || [];
    setStreaks(stored);
  }, []);

  //  Save to localStorage (skip first render)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      localStorage.setItem('streaks', JSON.stringify(streaks));
    }
  }, [streaks]);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newStreak = {
      name: formData.name,
      target: parseInt(formData.target),
      datesCompleted: [],
    };
    setStreaks([...streaks, newStreak]);
    setFormData({ name: '', target: '' });
    setShowForm(false);
  };

  const toggleDate = (date) => {
    const updated = [...streaks];
    const formatted = date.toISOString().split('T')[0];
    const streak = updated[selectedStreak];
    const index = streak.datesCompleted.indexOf(formatted);

    if (index === -1) {
      streak.datesCompleted.push(formatted);
    } else {
      streak.datesCompleted.splice(index, 1);
    }
    setStreaks(updated);
  };

  const isMarked = (date) => {
    if (selectedStreak === null) return false;
    const streak = streaks[selectedStreak];
    const formatted = date.toISOString().split('T')[0];
    return streak.datesCompleted.includes(formatted);
  };

  const handleStreakClick = (index) => {
    setSelectedStreak(index);
    setShowCalendar(true);
  };

  return (
    <div className="dashboard-container">
      <div className="welcome-box">
        <h2>Welcome Nivya 👋</h2>
        <p className="quote">{quote}</p>
      </div>

      <h1>🔥 Your Streaks</h1>

      <button className="add-btn" onClick={() => setShowForm(true)}>
        + Add New Streak
      </button>

      <div className="streak-names">
        {streaks.map((streak, index) => (
          <div
            key={index}
            className="streak-name"
            onClick={() => handleStreakClick(index)}
          >
            {streak.name}
          </div>
        ))}
      </div>

      {/* Calendar Modal */}
      {showCalendar && selectedStreak !== null && (
        <div className="modal-overlay" onClick={() => setShowCalendar(false)}>
          <div className="modal-calendar" onClick={(e) => e.stopPropagation()}>
            <h3>{streaks[selectedStreak].name} Calendar</h3>
            <Calendar
              onClickDay={toggleDate}
              tileClassName={({ date }) =>
                isMarked(date) ? 'marked-date' : null
              }
            />
            <button className="close-btn" onClick={() => setShowCalendar(false)}>
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Streak Form Modal */}
      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal-form" onClick={(e) => e.stopPropagation()}>
            <h3>Create a New Streak</h3>
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Streak Name"
                value={formData.name}
                onChange={handleFormChange}
                required
              />
              <input
                type="number"
                name="target"
                placeholder="Target Days"
                value={formData.target}
                onChange={handleFormChange}
                required
              />
              <button type="submit">Create</button>
            </form>
            <button className="close-btn" onClick={() => setShowForm(false)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
