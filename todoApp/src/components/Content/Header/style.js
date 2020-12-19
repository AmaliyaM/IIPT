import React from 'react';

import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background-color: ${({ theme}) => theme.backgroundColor};
  height: 120px;
  color: ${({ theme}) => theme.headerColor};
  position: sticky;
  top:0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 9999;
  box-shadow: 0 0 5px rgba(0,0,0,1);
`;

export const LogoContainer = styled.div`
  background-color: #3f3e3e;
  height: auto; 
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 140px;
  height: 100%;
`;

export const Links = styled.div`
  height: auto;
  width: 60%;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const Button = styled.button`
  height: 100%;
  width: 33.5%;
  background-color: transparent;
  justify-content: space-between;
  border: none;
  font-size: 20px;
  color: ${(props) => props.isActive ? props.theme.headerSelectedTabColor : props.theme.headerColor};
  background-color: ${(props) => props.isActive ? props.theme.headerSelectedTabBackgroundColor : 'transparent'};
  &:hover {
    background-color: ${({ theme }) => theme.headerHoverBackgroundColor};
    color:  ${({ theme }) => theme.headerHoverColor};
  }
`;

export const UserContainer = styled.div`
  min-width: 200px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

