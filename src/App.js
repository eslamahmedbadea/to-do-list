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
    setToDos([...toDos, text]);

    // Delete the input value after add it
    inputRef.current.value = "";
  };

  return (
    <div className="App">
      {/* Todo List */}
      <div className="to-do-container">
        <h2>To Do List</h2>
        <ul>
          {toDos.map((item) => (
            <li>{item}</li>
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
