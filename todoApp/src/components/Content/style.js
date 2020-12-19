import React from 'react';

import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  min-height: calc(100vh - 120px);
  background-color: ${({ theme }) => theme.mainBackgroundColor};
`

export const LeftPanel = styled.div`
  width: 280px;
  height: 530px;
  padding: 15px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  color: ${({ theme }) => theme.cardColor};
  background-color: ${({ theme }) => theme.cardBackgroundColor};
  box-shadow: 0 17px 33px -11px rgb(0 0 0 / 25%);
  a {
    margin: 10px;
  }
`

export const SwitchContainer = styled.span`
  display: flex;
  align-items: center;
`

export const SwitchLabel = styled.div`
  margin-left: 10px;
`

