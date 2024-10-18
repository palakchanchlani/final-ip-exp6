import React from 'react';
import './App.css';

function Courses() {
  const courseList = ['B.Tech', 'M.Tech', 'MBA', 'BBA', 'B.Sc'];

  return (
    <div className="container">
      <h2>Our Courses</h2>
      <ul>
        {courseList.map((course, index) => (
          <li key={index} style={{ margin: '10px 0', fontSize: '18px' }}>{course}</li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;
