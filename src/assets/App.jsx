import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import RecordList from './components/RecordList';
import RecordDelete from './components/RecordDelete';
import RecordCreate from './components/RecordCreate';

function App() {
  return (
    <Router>
      <div className="page-container">
        <header className="header">
          <Link to="/" className="white-button">Record List</Link>
          <Link to="/delete" className="white-button">Delete Record</Link>
          <Link to="/create" className="white-button">Creates Record</Link>
        </header>
        <Route path="/" exact component={RecordList} />
        <Route path="/delete" component={RecordDelete} />
        <Route path="/create" component={RecordCreate} />
      </div>
    </Router>
  );
}

export default App;
