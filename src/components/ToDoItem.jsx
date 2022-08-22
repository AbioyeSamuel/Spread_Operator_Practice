import React from "react";

function ToDoItem(props) {
  function removeItem(){
    props.onChecked(props.id);
  }
  return (
    <div>
      <li onClick = {removeItem}> {props.text} </li>
    </div>
  );
}

export default ToDoItem;
