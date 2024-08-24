import React from 'react';
import './WeekPopup.css';

const WeekPopup = ({ course, week, onClose }) => {
    let content = '';

    if (course === 'Design and Implementation of Human-Computer Interfaces') {
        switch (week) {
            case 'Week 5':
                content = (
                    <ul>
                        {/* Add more items as needed */}
                    </ul>
                );
                break;
            default:
                content = `Content for ${week}...`;
                break;
        }
    } else if (course === 'Psychology of Learning') {
        switch (week) {
            case 'Week 5':
                content = (
                    <ul>
                        
                        {/* Add more items as needed */}
                    </ul>
                );
                break;
            default:
                content = `Content for ${week}...`;
                break;
        }
        
    } else if (course === 'Sociology of Development') {
        switch (week) {
            case 'Week 5':
                content = (
                    <ul>
                        
                        {/* Add more items as needed */}
                    </ul>
                );
                break;
            default:
                content = `Content for ${week}...`;
                break;
        }
        // else if(course === ''){}
    } else {
        content = `Content for ${week}...`;
    }

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <span className="close-btn" onClick={onClose}>&times;</span>
                <h2>{course} - {week}</h2>
                <div>{content}</div>
            </div>
        </div>
    );
};

export default WeekPopup;
