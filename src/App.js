import { useState } from "react";
import { useRef } from "react";
import "./App.css";

function App() {
  // State
  const [toDos, setToDos] = useState([]);

  // Ref
  const inputRef = useRef();

  // Get the input value after press button
  const handleAddTodo = () => {
    const text = inputRef.current.value;

    if (!text.trim()) return;

    const newItem = {
      completed: false,
      text,
    };

    setToDos([...toDos, newItem]);

    // Delete the input value after add it
    inputRef.current.value = "";
  };

  // Toggle completed
  const handleItemDone = (index) => {
    const newTodos = [...toDos];
    newTodos[index].completed = !newTodos[index].completed;
    setToDos(newTodos);
  };

  // Toogle deleted
  const handleDeleteItem = (index) => {
    const newTodos = [...toDos];
    newTodos.splice(index, 1);
    setToDos(newTodos);
  };

  return (
    <div className="App">
      {/* Todo List */}
      <div className="to-do-container">
        <h2>To Do List</h2>

        <ul>
          {toDos.map((item, index) => {
            return (
              <div className="tasks-on-list">
                <li
                  key={index}
                  className={item.completed ? "done" : ""}
                  onClick={() => handleItemDone(index)}
                >
                  {item.text}
                </li>
                <span onClick={() => handleDeleteItem(index)}>❌</span>
              </div>
            );
          })}
        </ul>

        {/* Input & Button */}
        <input ref={inputRef} placeholder="Enter Your Task.." />
        <button onClick={handleAddTodo}>Add</button>
      </div>
    </div>
  );
}

export default App;
