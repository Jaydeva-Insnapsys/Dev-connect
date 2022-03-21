import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './element/layout/Navbar';
import Landing from './element/layout/Landing';
import Login from './element/auth/Login';
import Register from './element/auth/Register';
import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/Register' element={<Register />} />
        <Route exact path='/Login' element={<Login />} />
      </Routes>
    </Fragment>
  </Router>
);

export default App;
