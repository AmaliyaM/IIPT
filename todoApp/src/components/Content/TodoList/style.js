import React from "react"

import styled from "styled-components"

export const ListContainer = styled.div`
  padding: 20px;
  display: flex;
  width: 100%;
`

export const OverflowContainer = styled.div`
  overflow: auto;
  max-height: 440px;
`

export const Todos = styled.div`
  width: 100%;
  height: fit-content;
  max-height: 530px;
  padding: 20px 50px;  
  border-radius: 2px;
  color: ${({ theme }) => theme.cardColor};
  background-color: ${({ theme }) => theme.cardBackgroundColor};
  box-shadow: 0 17px 33px -11px rgb(0 0 0 / 25%);
`

export const InputControl = styled.div`
  display: flex;
`

