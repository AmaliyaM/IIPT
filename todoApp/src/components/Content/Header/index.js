import React, { Component } from 'react';
import './Header.css';
import logo from './logo.png';
//import { Route, Switch, Redirect, withRouter } from "react-router-dom"
//import { Link } from "react-router-dom"

class Header extends React.Component {
  
  state = {
    pageState: 0,// 0 - Articles, 1 - Todo, 2 - Shopping_list
  }

  

  // listTodo = () => {
  //   console.log("1111111111111")
  //   this.setState({
  //   pageState: 1 })
  // }

  // listShopping_list = () => {
  //   console.log("2222222222222")
  //   this.setState({
  //   pageState: 2 })
  // }

  // listArticles = () => {
  //   console.log("000000000000")
  //   this.setState({
  //   pageState: 0 })
  // }

  render() { 
    const { setCurrentPage } = this.props
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
        <div className="login"> вход в аккаунт</div>
      </div>
    );
  }
}
export default Header;

