import React, { Component } from 'react';
import { useSelector } from 'react-redux'
import { withTheme } from 'styled-components';
import Login from './Login'
import Logout from './Logout'
import logoDark from './logo_dark.png';
import logoLight from './logo_light.png';

import './Header.css';


import {
  HeaderContainer,
  LogoContainer,
  Image,
  Links,
  Button,
  UserContainer,
} from './style'

function Header(props) {
  const { currentPage, setCurrentPage, theme } = props
  const user = useSelector(state => state.user)
  console.log('newwwwwwwwww theme', theme)
  return (
    <HeaderContainer>
      <LogoContainer> 
        <Image src={theme.themeName === 'dark' ? logoDark : logoLight}/>
      </LogoContainer>
      <Links>
        <Button onClick={() => setCurrentPage(0)} isActive={0 === currentPage}> Список дел </Button>
        <Button onClick={() => setCurrentPage(1)} isActive={1 === currentPage}> Список покупок </Button>
        <Button onClick={() => setCurrentPage(2)} isActive={2 === currentPage}> Полезные статьи</Button>
      </Links>
      {user.name ? (
        <UserContainer>
          Welcome
          <div>
            {user.name}
          </div>
          <Logout />
        </UserContainer>
      ) : (
        <UserContainer>
          <Login />
        </UserContainer>
      )}
    </HeaderContainer>
  );
}

export default withTheme(Header);

