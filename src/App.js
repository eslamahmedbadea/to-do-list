import { useState } from "react";
import { useRef } from "react";

function App() {
  // State
  const [toDos, setToDos] = useState([]);

  // Ref
  const inputRef = useRef();

  // Get the input value after press button
  const handleAddTodo = () => {
    const text = inputRef.current.value;
  };

  return (
    <div className="App">
      {/* Title */}
      <h2>To Do List</h2>

      {/* Todo List */}
      <ul>
        {toDos.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      {/* Input & Button */}
      <input ref={inputRef} placeholder="Enter Your Task.." />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default App;
