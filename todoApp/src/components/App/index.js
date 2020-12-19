import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ThemeProvider } from 'styled-components'

import Header from "../Content/Header"
import Content from "../Content"
import { startFetchTodos } from "../../store/actionCreators/todoActions"

import "./index.css"

function App() {
  const [currentPage, setCurrentPage] = useState(0)
  const [currentTheme, setCurrentTheme] = useState("light")
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.isLoggedIn)
  const user = useSelector((state) => state.user)

  React.useEffect(() => {
    isLoggedIn && dispatch(startFetchTodos(user.email))
  }, [isLoggedIn])

  const theme = {
    themeName: currentTheme,
    headerColor: currentTheme === 'dark' ? '#a4cce4' : '#373636',
    backgroundColor: currentTheme === 'dark' ? '#3f3e3e' : '#bad5e6',
    headerHoverColor: '#fd9460',
    headerHoverBackgroundColor: currentTheme === 'dark' ? '#373636' : '#87c4ea',
    headerSelectedTabBackgroundColor: currentTheme === 'dark' ? '#373636' : '#87c4ea',
    headerSelectedTabColor: '#fd9460',


    mainBackgroundColor: currentTheme === 'dark' ? '#666971' : '#f5f7fc',    
    cardBackgroundColor: currentTheme === 'dark' ? '#484848' : 'white',
    darkerBackgroundColor: currentTheme === 'dark' ? '#313131' : 'white',
    cardColor: currentTheme === 'dark' ? '#fd9460' : 'black',    
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
        <Content currentPage={currentPage} setCurrentTheme={setCurrentTheme}/>
      </ThemeProvider>
    </div>
  )
}

export default App
