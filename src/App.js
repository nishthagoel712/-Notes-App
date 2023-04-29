//import logo from './logo.svg';
import './App.css';
import React from 'react'
import HomePage from './HomePage.js';
import EditNote from './EditNote.js';
import AddNote from './AddNote.js';
import ViewNote from './ViewNote.js';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/view" element={<ViewNote />} />
          <Route path="/edit" element={<EditNote />} />
          <Route path="/add" element={<AddNote />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
