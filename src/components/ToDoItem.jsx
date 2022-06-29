import React from "react";

function ToDoItem(props) {
  function handleClick() {}
  return (
    <div onClick={handleClick}>
      {" "}
      <li> {props.text}</li>;
    </div>
  );
}
export default ToDoItem;
