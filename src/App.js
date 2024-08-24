
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import Signup from './signup';
import WeekPopup from './WeekPopup';  // Import the WeekPopup component
import './App.css';


function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showWeekPopup, setShowWeekPopup] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedWeek, setSelectedWeek] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // New state to track login status

  const handleLoginClose = () => setShowLogin(false);
  const handleSignupClose = () => setShowSignup(false);
  const handleWeekPopupClose = () => setShowWeekPopup(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  const handleOpenWeekPopup = (course, week) => {
    if (isLoggedIn) {
      setSelectedCourse(course);
      setSelectedWeek(week);
      setShowWeekPopup(true);
    } else {
      alert('Please log in to access the courses.');
    }
  };
  
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="navbar">
            <div className="menu-icon">☰</div>
            <div className="brand-title">NPTEL</div>
            <div className="navbar-links">
              {!isLoggedIn && (
                <>
                  <button onClick={() => setShowSignup(true)} className="btn-signup">SignUp</button>
                  <button onClick={() => setShowLogin(true)} className="btn-login">Login</button>
                </>
              )}
              {isLoggedIn && <button className="btn-logout" onClick={() => setIsLoggedIn(false)}>Logout</button>}
            </div>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <main>
          <div className="courses">
            <div className="flex-grid">
              <div className="course-item">
                <button onClick={() => handleOpenWeekPopup('Design and Implementation of Human Interface', 'Week 5')} className="course-button">
                  Design and Implementation of Human Interface <span>➔</span>
                </button>
              </div>
              <div className="course-item">
                <button onClick={() => handleOpenWeekPopup('R Language', 'Week 5')} className="course-button">
                  R Language <span>➔</span>
                </button>
              </div>
              <div className="course-item">
                <button onClick={() => handleOpenWeekPopup('Sociology of Development', 'Week 5')} className="course-button">
                  Sociology of Development <span>➔</span>
                </button>
              </div>
            </div>

            <div className="flex-grid">   
              <div className="course-item">
                <button onClick={() => handleOpenWeekPopup('E-commerce', 'Week 5')} className="course-button">
                  E-commerce <span>➔</span>
                </button>
              </div>
              <div className="course-item">
                <button onClick={() => handleOpenWeekPopup('Psychology of Learning', 'Week 5')} className="course-button">
                  Psychology of Learning <span>➔</span>
                </button>
              </div>
              <div className="course-item">
                <button onClick={() => handleOpenWeekPopup('Social Innovation', 'Week 5')} className="course-button">
                  Social Innovation <span>➔</span>
                </button>
              </div>
            </div>
          </div>
        </main>


        {showLogin && (
          <div className="modal">
            <div className="modal-content">
              <button onClick={handleLoginClose} className="close-button">✖</button>
              <Login onLoginSuccess={handleLoginSuccess} />
            </div>
          </div>
        )}

        {showSignup && (
          <div className="modal">
            <div className="modal-content">
              <button onClick={handleSignupClose} className="close-button">✖</button>
              <Signup />
            </div>
          </div>
        )}

        {showWeekPopup && (
          <WeekPopup
            course={selectedCourse}
            week={selectedWeek}
            onClose={handleWeekPopupClose}
          />
        )}
      </div>
    </Router>
  );
}
function Home() {
  return (
    <div>
      <h1>Welcome to NPTEL</h1>
      <p>Please log in to access the courses.</p>
    </div>
  );
}


export default App;
