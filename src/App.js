import { Header } from "./containers/Header";
import { TaskList } from "./components/TaskList";
import {  useState, useEffect } from "react";

function App() {
  const [toDos, setTodos] = useState([
    {
      title:"Sample Task",
      description: "Don't forget to test",
    }
  ]);  

  const addTodos = (title, description) => {
    setTodos((prev) => {
      const toDos = {
        title: title,
        description:description,
      };
      
      return [...prev, toDos]
    });
  localStorage.setItem("toDos", JSON.stringify(toDos));
  };

useEffect(() => {
  setTodos(JSON.parse(localStorage.getItem("toDos")));
}, [])

  return (
    <div>
      <Header />
        <TaskList 
          toDos = {toDos}
          addTodos = {addTodos}
        />
    </div>
  );
}

export default App;
