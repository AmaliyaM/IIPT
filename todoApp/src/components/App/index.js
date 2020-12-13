import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../Content/Header';
import Content from '../Content';
import { startFetchTodos } from '../../store/actionCreators/todoActions'

import './index.css';



function App() {
  const [currentPage, setCurrentPage] = useState(0)
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state => state.isLoggedIn)
  const user = useSelector(state => state.user)

  React.useEffect(() => {
    isLoggedIn && dispatch(startFetchTodos(user.email))
  }, [isLoggedIn])

  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage}/>
      <Content currentPage={currentPage}/>
    </div>
  );
}

export default App;
