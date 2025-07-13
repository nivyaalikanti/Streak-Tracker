import React from 'react';
import './Home.css';
import homeImage from '../../assets/home.png'; // correct relative path

const Home = () => {
  return (
    <>
      <div className="home-hero">
        <div className="hero-content">
            <h1>
      Build Streaks & <br />Crush Goals
</h1>


          <p>Stay consistent. Stay motivated. Turn habits into success stories.</p>
          <div className="hero-buttons">
            <a href="/signup" className="btn-primary">Get Started</a>
            <a href="/login" className="btn-secondary">Already have an account?</a>
          </div>
        </div>
        <div className="hero-image">
          <img src={homeImage} alt="Hero" />
        </div>

      </div>
      

      <section class="timeline-section">
        <h2>How It Works</h2>
        <div class="timeline-wrapper">
          <div class="timeline-item top">
            <div class="timeline-icon blue">
              <img src="https://img.icons8.com/ios-filled/30/ffffff/goal.png" alt="Step 1" />
            </div>
            <div class="timeline-content">
              <h3>Create a Streak</h3>
              <p>Set a goal like coding, reading, or fitness.</p>
            </div>
          </div>

          <div class="timeline-item bottom">
            <div class="timeline-icon cyan">
              <img src="https://img.icons8.com/ios-filled/30/ffffff/calendar.png" alt="Step 2" />
            </div>
            <div class="timeline-content">
              <h3>Track Daily</h3>
              <p>Update your calendar and never miss a day.</p>
            </div>
          </div>

          <div class="timeline-item top">
            <div class="timeline-icon indigo">
              <img src="https://img.icons8.com/ios-filled/30/ffffff/fire-element.png" alt="Step 3" />
            </div>
            <div class="timeline-content">
              <h3>Stay Motivated</h3>
              <p>Keep your streak alive and build momentum.</p>
            </div>
          </div>

          <div class="timeline-item bottom">
            <div class="timeline-icon purple">
              <img src="https://img.icons8.com/ios-filled/30/ffffff/trophy.png" alt="Step 4" />
            </div>
            <div class="timeline-content">
              <h3>Celebrate Progress</h3>
              <p>See your growth and reach your goals!</p>
            </div>
          </div>
        </div>
      </section>
      {/* Features */}
      <section class="features-section">
        <h1>Features You’ll Love</h1>
        <div class="features-grid">
          <div class="feature-item">
            <img src="https://img.icons8.com/ios-filled/50/007bff/fire-element.png" alt="Streaks" />
            <h3>Daily Streak Tracking</h3>
            <p>Track habits day by day using a visual calendar.</p>
          </div>
          <div class="feature-item">
            <img src="https://img.icons8.com/ios-filled/50/007bff/calendar--v1.png" alt="Calendar" />
            <h3>Calendar View</h3>
            <p>See your entire month’s progress at a glance.</p>
          </div>
          <div class="feature-item">
            <img src="https://img.icons8.com/ios-filled/50/007bff/refresh.png" alt="Edit" />
            <h3>Editable Streaks</h3>
            <p>Update, rename, or reset your streaks anytime.</p>
          </div>
          <div class="feature-item">
            <img src="https://img.icons8.com/ios-filled/50/007bff/quote.png" alt="Quotes" />
            <h3>Motivational Quotes</h3>
            <p>Stay inspired with a new quote every day.</p>
          </div>
        </div>
      </section>


    </>

  );
};

export default Home;
