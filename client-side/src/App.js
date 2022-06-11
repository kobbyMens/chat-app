import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Join from './features/join/Join';
import Chat from './features/chat/Chat';



function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" exact element={<Join />} />
      <Route path="/chat" element={<Chat />} /> 
      </Routes>
    </Router>
  );
}

export default App;
