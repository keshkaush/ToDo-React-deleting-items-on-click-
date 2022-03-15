import React, { useState } from "react";
import List from "./AddingItems";

function App() {
  const [theArray, setTheArray] = useState([]);
  const [newValue, setNewValue] = useState("");

  function takeInput(event) {
    var input = event.target.value;
    setNewValue(input);
  }

  function addingToArray() {
    setTheArray((preValue) => [...preValue, newValue]);
    setNewValue("");
  }

  function deletingFromArray(id) {
    setTheArray((preItem) => {
      return theArray.filter((item, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={takeInput} value={newValue} />
        <button onClick={addingToArray}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {theArray.map((element, index) => (
            <List
              key={index}
              id={index}
              element={element}
              deleteItem={deletingFromArray}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
