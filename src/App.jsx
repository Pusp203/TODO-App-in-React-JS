import React, { useState } from "react";

const App = () => {
  const [items, setItems] = useState("");
  const [todo, settodo] = useState([]);
  console.log("todo", todo);
  const handleAddto = (e) => {
    e.preventDefault();
    settodo([items, ...todo]);
    setItems("");
  };
  //

  const handleDelete = (value) => {
    // console.log("val", value);
    const filteredItems = todo.filter((val) => {
      return val !== value;
    });
    console.log("filterd", filteredItems);
    settodo(filteredItems);
  };

  const handleClick = (e) => {
    setItems(e.target.value);
  };
  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="enter your todo"
          value={items}
          onChange={handleClick}
        />
        <button type="submit" onClick={handleAddto}>
          Add Todo
        </button>

        {todo.map((value) => (
          <p>
            {value}{" "}
            <button type="button" onClick={() => handleDelete(value)}>
              Delete
            </button>
          </p>
        ))}
      </form>
    </div>
  );
};
export default App;
