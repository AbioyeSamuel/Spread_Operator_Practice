import React, from "react";

function ToDoItem(props) {
  function handleClick(){
    
  }
  return <div onClick={handleClick}> <li style={{textDecoration: isDone ?  "line-through" : "none"}}>{props.text}</li>;
</div>}
export default ToDoItem;
