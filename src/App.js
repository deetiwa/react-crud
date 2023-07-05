import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Create/>}></Route>
    <Route path='/read' element={<Read/>}></Route>
    <Route path='/update' element={<Update/>}></Route>
    </Routes>
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
