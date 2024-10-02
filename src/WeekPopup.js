import React from 'react';
import './WeekPopup.css';

const WeekPopup = ({ course, week, onClose }) => {
    let content = '';

    if (course === 'Design and Implementation of Human Interface') {
        switch (week) {
            case 'Week 10':
                content = (
                    <ul>
                        <p><b>Content for Week 10</b></p>
                        <li>1. B </li>
                        <li>2. A </li>
                        <li>3. A </li>
                        <li>4. B </li>
                        <li>5. A </li>
                        <li>6. A </li>
                        <li>7. A </li>
                        <li>8. C </li>
                        <li>9. B </li>
                        <li>10. C</li>
                        {/* Add more items as needed */}
                        {/* <li>Content for Week 6</li> */}
                    </ul>
                );
                break;
            default:
                content = `Content for ${week}...`;
                break;
        }
    } else if (course === 'Psychology of Learning') {
        switch (week) {
            case 'Week 10':
                content = (
                    <ul>
                        {/* Add more items as needed */}
                        {/* <li>Content for Week 6</li> */}
                        <p><b>Content for Week 10</b></p>
                        <li>1. C</li>
                        <li>2. B</li>
                        <li>3. D</li>
                        <li>4. D</li>
                        <li>5. B</li>
                        <li>6. D</li>
                        <li>7. C</li>
                        <li>8. D</li>
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
            case 'Week 10':
                content = (
                    <ul>
                        <p><b>Content for Week 10</b></p>
                        <li>1. C</li>
                        <li>2. C</li>
                        <li>3. A</li>
                        <li>4. D</li>
                        <li>5. A</li>
                        <li>6. A</li>
                        <li>7. C</li>
                        <li>8. A</li>
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
            case 'Week 10':
                content = (
                    <ul>
                        <p><b>Content for Week 10</b></p>
                        <li>1. A</li>
                        <li>2. B</li>
                        <li>3. D</li>
                        <li>4. D</li>
                        <li>5. D</li>
                        <li>6. C</li>
                        <li>7. B</li>
                        <li>8. B</li>
                        <li>9. C</li>
                        <li>10. C</li>
                        {/* Add more items as needed */}
                    </ul>
                );
                break;
            default:
                content = `Content for ${week}...`;
                break;
        }
    }else if (course === 'Foundation of R language') {
        switch (week) {
            case 'Week 10':
                content = (
                    <ul>
                        <p><b>Content for Week 10</b></p>
                        <p> Need to update the solutions</p>
                        {/* Add more items as needed */}
                    </ul>
                );
                break;
            default:
                content = `Content for ${week}...`;
                break;
        }
    }else {
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
