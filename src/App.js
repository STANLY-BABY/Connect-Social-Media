import './App.css';
import React, { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import UserHome from './Pages/Login/UserHome';
function App() {
  return (
     <Fragment>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<UserHome/>}/>
      </Routes>
    </BrowserRouter>
  </Fragment>
  );
}

export default App;
