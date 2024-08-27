import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WeekPopup from './WeekPopup';  // Import the WeekPopup component
import './App.css';

function App() {
  const [showWeekPopup, setShowWeekPopup] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedWeek, setSelectedWeek] = useState('');

  const handleWeekPopupClose = () => setShowWeekPopup(false);

  const handleOpenWeekPopup = (course, week) => {
    setSelectedCourse(course);
    setSelectedWeek(week);
    setShowWeekPopup(true);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="navbar">
            <div className="menu-icon">☰</div>
            <div className="brand-title">NPTEL</div>
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
                  Design and Implementation of Human Interface <span className="spn">➔</span>
                </button>
              </div>
              <div className="course-item">
                <button onClick={() => handleOpenWeekPopup('Foundation of R language', 'Week 5')} className="course-button">
                Foundation of R language <span className="spn">➔</span>
                </button>
              </div>
              <div className="course-item">
                <button onClick={() => handleOpenWeekPopup('Sociology of Development', 'Week 5')} className="course-button">
                  Sociology of Development <span className="spn">➔</span>
                </button>
              </div>
            </div>

            <div className="flex-grid">   
              {/* <div className="course-item">
                <button onClick={() => handleOpenWeekPopup('E-commerce', 'Week 5')} className="course-button">
                  E-commerce <span className="spn">➔</span>
                </button>
              </div> */}
              <div className="course-item">
                <button onClick={() => handleOpenWeekPopup('Psychology of Learning', 'Week 5')} className="course-button">
                  Psychology of Learning <span className="spn">➔</span>
                </button>
              </div>
              <div className="course-item">
                <button onClick={() => handleOpenWeekPopup('Social Innovation in Industry 4.0', 'Week 5')} className="course-button">
                  Social Innovation in Industry 4.0<span className="spn">➔</span>
                </button>
              </div>
            </div>
          </div>
        </main>

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
    <div className="home-txt">
      <h1>Welcome to NPTEL</h1>
      <p>Select a course to get started.</p>
    </div>
  );
}

export default App;
