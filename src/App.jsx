import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Details from './Components/Details/Details';
import './App.css';

function App() {
  const [selectedClass, setSelectedClass] = useState('Class A');

  const handleClassChange = (className) => {
    setSelectedClass(className);
  };

  return (
    <Router>
      <div className="App">
        <Header onClassChange={handleClassChange} />
        <Routes>
          <Route
            path="/class/:className"
            element={<Details selectedClass={selectedClass} />}
          />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
