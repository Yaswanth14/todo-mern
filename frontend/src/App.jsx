import { useState, useEffect } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    setInterval(()=>{
      fetch("http://localhost:3000/todos")
      .then(async function(res){
        const json = await res.json();
        setTodos(json.todos);
      });
    }, 5000);
  }, []);

  return (
    <>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </>
  )
}

export default App
