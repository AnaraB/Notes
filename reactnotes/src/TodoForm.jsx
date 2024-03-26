import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Create from "@mui/icons-material/Create";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";

function TodoForm({addTodo}) {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };

  function handleSubmit(event){
    event.preventDefault();
    addTodo(text);
    setText("");
  }
  return (
    <ListItem>
      <form onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="To Do"
        variant="outlined"
        onChange={handleChange}
        value={text}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="create to do" edge="end" type="submit">
                <Create />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      </form>
    </ListItem>
  );
}

export default TodoForm;
