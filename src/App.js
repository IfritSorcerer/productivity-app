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
  

  const removeTodos = (index) => {
    setTodos((prev) => {
      const updatedTodos = [...prev];
      updatedTodos.splice(index, 1)
      localStorage.setItem("toDos", JSON.stringify(updatedTodos));
      return updatedTodos;
    })
  }

  return (
    <div>
      <Header />
      <TaskList 
        toDos={toDos} 
        setTodos={setTodos} 
        removeTodos={removeTodos}/>
    </div>
  );
}

export default App;
