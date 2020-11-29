import React, { Component } from 'react';

import './index.css';


export default class Content extends Component {
  renderPage = () => {
    const { currentPage } = this.props
  
    switch (currentPage) {
      case 0:
        return (
          <div className="content">
            <div className="leftPanel">
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
            <div className="inside">
              статьи
                </div>
          </div>
        )
        break
      case 1:
        return (
          <div className="content">
            <div className="leftPanel">
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
            <div className="inside">
              список дел
          </div>
          </div>
        )
        break
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
              список покупок
            </div>
          </div>
        )
        break
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
