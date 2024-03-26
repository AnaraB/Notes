import { useState, useEffect } from "react";
import List from "@mui/material/List";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import {Box} from "@mui/material" 
import Typography from "@mui/material/Typography";

  //let's render todos stored in local storage

  const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos"))
   if(!data) return [];
   return data;
  }


export default function TodoList() {
  const [todos, setTodos] = useState(getInitialData);



  //let's save todo list in local storage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))

  }, [todos])


// return only id's that are not selected by clicking delete icon
  const removeTodo = (id) => {
    setTodos(prevTodos => {
      return prevTodos.filter((t)=> t.id !== id)
    })
  }
 
  //toggle selected todo state from completed boolean to opposite else return todo
 const toggleTodo = (id)=> {
  setTodos((prevTodos) => {
    return prevTodos.map((todo) => {
      if(todo.id === id) {
        return {...todo, completed: !todo.completed}
      } else {
        return todo;
      }
    })
  })

 }

 const addTodo = (text) => {
  setTodos((prevTodos) => {
    return [...prevTodos, {text: text, id: crypto.randomUUID(), completed: false}]
  })

 }
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center", 
      flexDirection: "column",
      alignItems: "center",
      m:3
    }}>
    <Typography variant="h3" component="h2" sx={{ flexGrow: 1 }}>
  Today
  </Typography>
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
         {todos.map((todo) => (
          //use implicit return  by placing a component into ()
       <TodoItem  todo={todo} key={todo.id} remove={removeTodo} toggle={() => toggleTodo(todo.id)}/>

    ))}
      <TodoForm addTodo={addTodo}/>
    </List>
    </Box>
   
  );
}

