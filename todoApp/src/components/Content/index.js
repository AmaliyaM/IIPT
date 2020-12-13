import React, { Component } from 'react';

import TodoList from './TodoList'

import './index.css';


export default class Content extends Component {
  renderPage = () => {
    const { currentPage } = this.props
  
    switch (currentPage) {
      case 0:
        return <TodoList filterOption='todo'/>
      case 1:
        return  <TodoList filterOption='tobuy'/>
      case 2:
        return (
          <div className="content">
          <div className="leftPanel">
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
          <div className="inside">
            Статьи
          </div>
        </div>
        )
      default:
        break
    }
  }

  render() {
    return (
      <>
        {this.renderPage()}
      </>
    )
  }
}
