
import { TaskList } from "./components/TaskList";
import { useEffect, useState } from "react";
import "./styles/app.css";
function App() {
  const [toDos, setTodos] = useState(() => {
    const savedTodos = JSON.parse(localStorage.getItem("toDos"));
    return (
      savedTodos || [
        {
          title: "Take the dog for a walk",
          description: "please don't forget to take the dog for a walk at 5pm",
        },
      ]
    );
  });

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);

  const removeTodos = (index) => {
    setTodos((prev) => {
      const updatedTodos = [...prev];
      updatedTodos.splice(index, 1);
      localStorage.setItem("toDos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  return (
    <div>
      <h1 className="header">Productivity +</h1>
      <p className="header-subline">A to-do list app to keep track of what you need to get done!</p>
      <TaskList toDos={toDos} setTodos={setTodos} removeTodos={removeTodos} />
    </div>
  );
}

export default App;
