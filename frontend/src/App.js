import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Create from './components/Create';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Alle from './components/Alle';
import Update from './components/Update';
import Marks from './components/marks';


function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
     <BrowserRouter>
     <Routes>

      <Route path="/create" element={<Create />} />
      <Route path="/" element={<Alle />} />
       <Route path="/:id" element={<Update />} />
       <Route path="/marks" element={<Marks />} />
      
     
     </Routes>
      
     </BrowserRouter>
     
    </div>
  );
}

export default App;
