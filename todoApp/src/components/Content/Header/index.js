import React, { Component } from 'react';
import { useSelector } from 'react-redux'

import Login from './Login'
import Logout from './Logout'
import logo from './logo.png';

import './Header.css';
//import { Route, Switch, Redirect, withRouter } from "react-router-dom"
//import { Link } from "react-router-dom"

function Header(props) {
  const { setCurrentPage } = props
  const user = useSelector(state => state.user)
  console.log('user', user)
  return (
    <div className="head">
      <div className="logo"> 
        <img className="plan" src={logo}/>
      </div>
      <div className="links">
        <button className="button" onClick={() => setCurrentPage(0)}> Список дел </button>
        <button className="button" onClick={() => setCurrentPage(1)}> Список покупок </button>
        <button className="button" onClick={() => setCurrentPage(2)}> Полезные статьи</button>
      </div>
      {user.name ? (
        <div>
          {`Welcome ${user.name}`}
          <Logout />
        </div>
      ) : (
        <div className="login">
          <Login />
        </div>
      )}
    </div>
  );
}

export default Header;

