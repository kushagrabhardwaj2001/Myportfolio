import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/HomePage';



function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Homepage />} />
        
      
      </Routes>
    </React.Fragment>
  );
}

export default App;
