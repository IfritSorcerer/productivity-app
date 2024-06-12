import { Header } from "./containers/Header";
import { TaskList } from "./components/TaskList";
import { useEffect, useState } from "react";

function App() {
  const [toDos, setTodos] = useState(() => {
    const savedTodos = JSON.parse(localStorage.getItem("toDos"));
    return savedTodos || [
      {
        title: "Sample Task",
        description: "Don't forget to test",
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);
  
  const addTodos = (title, description) => {
    setTodos((prev) => {
      const newTodo = {
        title: title,
        description: description,
      };
      return [...prev, newTodo];
    });
  };

  return (
    <div>
      <Header />
      <TaskList toDos={toDos} addTodos={addTodos} />
    </div>
  );
}

export default App;
