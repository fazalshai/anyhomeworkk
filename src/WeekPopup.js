import React from 'react';
import './WeekPopup.css';

const WeekPopup = ({ course, week, onClose }) => {
    let content = '';

    if (course === 'Design and Implementation of Human Interface') {
        switch (week) {
            case 'Week 5':
                content = (
                    <ul>
                        <p><b>Content for Week 5</b></p>
                        <li>1. D</li>
                        <li>2. C</li>
                        <li>3. B</li>
                        <li>4. B</li>
                        <li>5. D</li>
                        <li>6. A</li>
                        <li>7. C</li>
                        <li>8. C</li>
                        {/* Add more items as needed */}
                        {/* <li>Content for Week 5</li> */}
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
                        {/* <li>Content for Week 5</li> */}
                        <p><b>Content for Week 5</b></p>
                        <li>1. C</li>
                        <li>2. B</li>
                        <li>3. B</li>
                        <li>4. A</li>
                        <li>5. D</li>
                        <li>6. A</li>
                        <li>7. D</li>
                        <li>8. B</li>
                        <li>9. A</li>
                        <li>10. D</li>
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
                        <p><b>Content for Week 5</b></p>
                        <li>1. (c) Ethnocentrism</li>
                        <li>2. (b) Neo-Marxism</li>
                        <li>3. (d) All of these</li>
                        <li>4. (d) All of these</li>
                        <li>5. (a) Ideological, Empirical, and Methodological or Metatheoretical</li>
                        <li>6. (c) Modernization</li>
                        <li>7. (d) Hamza Alavi</li>
                        <li>8. (d) Raul Prebisch</li>
                        {/* Add more items as needed */}
                    </ul>
                );
                break;
            default:
                content = `Content for ${week}...`;
                break;
        }
    }else if (course === 'Social Innovation in Industry 4.0') {
        switch (week) {
            case 'Week 5':
                content = (
                    <ul>
                        <p><b>Content for Week 5</b></p>
                        <li>1. D</li>
                        <li>2. D</li>
                        <li>3. D</li>
                        <li>4. B</li>
                        <li>5. B</li>
                        <li>6. B</li>
                        <li>7. B</li>
                        <li>8. B</li>
                        <li>9. B</li>
                        <li>10. C</li>
                        <li>11. B</li>
                        <li>12. A</li>
                        <li>13. A</li>
                        <li>14. C</li>
                        <li>15. D</li>
                        {/* Add more items as needed */}
                    </ul>
                );
                break;
            default:
                content = `Content for ${week}...`;
                break;
        }
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
