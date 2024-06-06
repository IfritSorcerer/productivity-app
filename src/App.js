import { TaskForm } from "./components/TaskForm";
import { Header } from "./containers/Header";
import { TaskList } from "./components/TaskList";
import { useState } from "react";

function App() {
  const [toDos, setTodos] = useState([
    {
      title:"Sample Task",
      description: "Don't forget to test",
      date: "4/20/95"
    }
  ]);

  const addTodos = (title, description, date) => {
    setTodos((prev) => {
      const toDos = {
        title: title,
        description:description,
        date: date
      };
      return [...prev, toDos]
    });
  };
  console.log(toDos);
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
