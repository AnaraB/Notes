import React, { useState } from "react"
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";

function TodoItem({todo, remove}) {

  const labelId = `checkbox-list-label-${todo.id}`;

  //define function removeTodo  that passes both "id" and "remove" params 
  const removeTodo = function(){
    remove(todo.id);
  }

      return (
        <ListItem
          
          secondaryAction={
            <IconButton edge="end" aria-label="comments" onClick={removeTodo}>
              <CommentIcon />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton
            role={undefined}
    
            dense
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={todo.completed}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={todo.text} />
          </ListItemButton>
        </ListItem>
      );
}

export default TodoItem