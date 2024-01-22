import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  return (
    <>
      <CreateTodo></CreateTodo>
      <Todos></Todos>
    </>
  )
}

export default App
