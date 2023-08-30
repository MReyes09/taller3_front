import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Menu from '../pages/Menu';
import Registro from '../pages/Registro';



function AppRoutes() {
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={<Login/>}></Route>
      <Route exact path='/menu' element={<Menu/>}></Route>
      <Route exact path='/registro' element={<Registro/>}></Route>


      </Routes>
    </Router>
  );
}

export default AppRoutes;