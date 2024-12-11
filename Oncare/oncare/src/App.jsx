import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Components/Login/Signup/Register.jsx'
import Login from './Components/Login/Login.jsx'
import Home from './Components/Home/Home.jsx';
import About from './Components/About/about.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
