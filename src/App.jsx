import React, { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [item, setItem] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const handleAddTodo = (e) => {
    e.preventDefault();
    setTodo([...todo, item]);
    setItem("");
  };

  const handleUpdateTodo = (e) => {
    e.preventDefault();
    setTodo(todo.map((val) => (val === selectedItem ? item : val)));
    setItem("");
    setSelectedItem(null);
  };

  const handleDeleteTodo = (value) => {
    setTodo(todo.filter((val) => val !== value));
  };

  const handleSelectTodo = (value) => {
    setItem(value);
    setSelectedItem(value);
  };

  return (
    <div>
      <form onSubmit={selectedItem ? handleUpdateTodo : handleAddTodo}>
        <input
          type="text"
          value={item}
          placeholder="Enter your Todo"
          onChange={(e) => setItem(e.target.value)}
        />
        <button type="submit">
          {selectedItem ? "Update Todo" : "Add Todo"}
        </button>
      </form>
      {todo.map((value) => (
        <p key={value}>
          {value}{" "}
          <button type="button" onClick={() => handleSelectTodo(value)}>
            Edit
          </button>{" "}
          <button type="button" onClick={() => handleDeleteTodo(value)}>
            Delete
          </button>
        </p>
      ))}
    </div>
  );
};

export default App;
