import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target;
    setInputText(newValue);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          type="text"
          name="item"
          value={inputText}
        />
        <button>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>Add Item</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
