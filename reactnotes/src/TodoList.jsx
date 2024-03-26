import { useState } from "react";
import List from "@mui/material/List";
import TodoItem from "./TodoItem";


const initialTodos = [
  { id: 1, text: "walk the dog", completed: false },
  { id: 2, text: "Cook lunch", completed: false },
  { id: 3, text: "walk the dog", completed: true },
  { id: 4, text: "shopping", completed: false },
  { id: 5, text: "walk the dog", completed: true },
];

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);


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
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
         {todos.map((todo) => (
          //use implicit return  by placing a component into ()
       <TodoItem  todo={todo} key={todo.id} remove={removeTodo} toggle={() => toggleTodo(todo.id)}/>

    ))}
     
    </List>
  );
}

// export default function CheckboxList() {
//   const [checked, setChecked] = React.useState([0]);

//   const handleToggle = (value: number) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

//   return (
//     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//       {[0, 1, 2, 3].map((value) => {
//         const labelId = `checkbox-list-label-${value}`;

//       })}
//     </List>
//   );
// }
