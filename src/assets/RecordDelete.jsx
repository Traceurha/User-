import React, { useState } from 'react';

const RecordDelete = () => {
  const [studentNumber, setStudentNumber] = useState('');

  const handleDelete = () => {
    // Your code to delete the record with the given studentNumber
  };

  return (
    <div className="page-container">
      <h2>Delete Record</h2>
      <input
        type="text"
        placeholder="Enter Student Number"
        value={studentNumber}
        onChange={(e) => setStudentNumber(e.target.value)}
      />
      <button onClick={handleDelete} className="white-button">Delete Record</button>
    </div>
  );
}

export default RecordDelete;
