import React from 'react';
import './App.css';

function Faculty() {
  const facultyList = [
    { id: 1, name: 'Dr. Smith', department: 'Computer Science' },
    { id: 2, name: 'Prof. Johnson', department: 'Mechanical Engineering' },
    { id: 3, name: 'Dr. Brown', department: 'Mathematics' }
  ];

  return (
    <div className="container">
      <h2>Our Faculty</h2>
      <ul>
        {facultyList.map((faculty) => (
          <li key={faculty.id} style={{ margin: '10px 0', fontSize: '18px' }}>
            <strong>{faculty.name}</strong> - {faculty.department}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Faculty;
