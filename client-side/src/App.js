import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './features/login/Home';
import Signup from './features/signup/Signup';

//react-loader-spinner css
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/sign-up" element={<Signup />} /> 
      </Routes>
    </Router>
  );
}

export default App;
