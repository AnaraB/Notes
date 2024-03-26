import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CssBaseline from "@mui/material/CssBaseline"
import TodoList from './TodoList'

function App() {

  //CssBaseline removes all margines and paddings, resets css

  return (
   <>
   <CssBaseline />
   <h1>ToDos</h1>
   <TodoList />
   </>
  )
}

export default App
