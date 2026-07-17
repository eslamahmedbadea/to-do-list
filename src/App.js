import { useState, useRef } from "react";
import "./App.css";

function App() {
  // State
  const [toDos, setToDos] = useState([]);

  // Refs
  const inputRef = useRef();

  // Add Todo
  const handleAddTodo = () => {
    const text = inputRef.current.value;

    if (!text.trim()) return;

    const newItem = {
      text,
      completed: false,
    };

    setToDos([...toDos, newItem]);

    // Clear input after adding
    inputRef.current.value = "";
  };

  // Complete Todo
  const handleItemDone = (index) => {
    const newTodos = [...toDos];
    newTodos[index].completed = !newTodos[index].completed;

    setToDos(newTodos);
  };

  // Remove Todo
  const handleDeleteItem = (index) => {
    const newTodos = [...toDos];
    newTodos.splice(index, 1);

    setToDos(newTodos);
  };

  return (
    <div className="App">
      <div className="to-do-container">
        <h2>To Do List</h2>

        <ul>
          {toDos.map((item, index) => (
            <div className="tasks-on-list" key={index}>
              <li
                className={item.completed ? "done" : ""}
                onClick={() => handleItemDone(index)}
              >
                {item.text}
              </li>

              <span onClick={() => handleDeleteItem(index)}>❌</span>
            </div>
          ))}
        </ul>

        {/* Input & Button */}
        <input ref={inputRef} placeholder="Enter Your Task.." />
        <button onClick={handleAddTodo}>Add</button>
      </div>
    </div>
  );
}

export default App;
