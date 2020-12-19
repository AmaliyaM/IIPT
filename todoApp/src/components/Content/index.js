import React, { Component } from 'react';

import TodoList from './TodoList'
import Articles from './Articles'
import Calendar from 'react-calendar'

import './index.css';
import {
  ContentContainer,
  LeftPanel,
  SwitchLabel,
  SwitchContainer,
} from './style'
import "react-calendar/dist/Calendar.css";

export default class Content extends Component {
  renderPage = () => {
    const { currentPage } = this.props

    switch (currentPage) {
      case 0:
        return <TodoList filterOption='todo' />
      case 1:
        return <TodoList filterOption='tobuy' />
      case 2:
        return <Articles />
      default:
        break
    }
  }

  handleSwitch = (event) => {
    const { setCurrentTheme } = this.props
    if (event.target.checked) setCurrentTheme('dark')
    else setCurrentTheme('light')
  }

  render() {
    return (
      <ContentContainer>
        <LeftPanel>
          <SwitchContainer>
          <label class="switch">
            <input type="checkbox" onChange={this.handleSwitch}/>
            <span class="slider round" />
          </label>
          <SwitchLabel> Theme switch </SwitchLabel>
          </SwitchContainer>
          <a href="https://clck.yandex.ru/redir/dtype=stred/pid=7/cid=1228/*https://yandex.ru/pogoda/971" target="_blank"><img src="https://info.weather.yandex.net/971/2.ru.png?domain=ru" border="0" alt="Яндекс.Погода" /><img width="1" height="1" src="https://clck.yandex.ru/click/dtype=stred/pid=7/cid=1227/*https://img.yandex.ru/i/pix.gif" alt="" border="0" /></a>
          <Calendar />
        </LeftPanel>
        {this.renderPage()}
      </ContentContainer>
    )
  }
}
