import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

import Header from '../Content/Header';
import Content from '../Content';
import { startFetchTodos, startCreateTodo } from '../../store/actionCreators/todoActions'

import './index.css';



function App() {
  const [currentPage, setCurrentPage] = useState(0)
  const dispatch = useDispatch()

  React.useEffect(() => {
    console.log('componentDidMount')
    dispatch(startFetchTodos('123321'))
  }, [])  

  return (
    <div className="App">
      <button onClick={()=> dispatch(startCreateTodo('make a coffee'))}>Click</button>
     <Header setCurrentPage={setCurrentPage}/>
     <Content currentPage={currentPage}/>
    </div>
  );
}

export default App;
