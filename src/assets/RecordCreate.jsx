import React, { useState } from 'react';

const RecordCreate = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [studentID, setStudentID] = useState('');
  const [classInfo, setClassInfo] = useState('');
  const [grade, setGrade] = useState('');

  const handleCreate = () => {
    // Assuming you have a function named 'createRecord' to handle the creation logic
    const newRecord = {
      name: name,
      surname: surname,
      studentID: studentID,
      classInfo: classInfo,
      grade: grade,
    };

    // Pass the new record data to a function to handle its creation
    createRecord(newRecord);
    // Reset the form fields after record creation
    setName('');
    setSurname('');
    setStudentID('');
    setClassInfo('');
    setGrade('');
  };

  return (
    <div className="page-container">
      <h2>Create Record</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
      <input type="text" placeholder="Student ID" value={studentID} onChange={(e) => setStudentID(e.target.value)} />
      <input type="text" placeholder="Class" value={classInfo} onChange={(e) => setClassInfo(e.target.value)} />
      <input type="text" placeholder="Grade" value={grade} onChange={(e) => setGrade(e.target.value)} />
      <button onClick={handleCreate} className="white-button">Create Record</button>
    </div>
  );
}

export default RecordCreate;
