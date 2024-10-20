import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Components/Login/Signup/Register'
import Login from './Components/Login/Login'


function App() {
  return(
    <Router>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
