import { React, useState} from "react";
import { TaskForm } from "./TaskForm";


export const TaskList = ({ toDos, addTodos }) => {
  const [isComplete, setIsComplete] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodos(title, description);
    setTitle("");
    setDescription("");
    
  };



  return (
    <div className="buttonSort">
      <TaskForm 
        title={title} setNewTitle={setTitle}
        description={description} setNewDescription={setDescription}
        handleSubmit={handleSubmit} 
      />
      <button
        className={`isComplete ${isComplete === false && "active"}`}
        onClick={() => setIsComplete(false)}
      >
        In-Progress
      </button>
      <button
        className={`isComplete ${isComplete === true && "active"}`}
        onClick={() => setIsComplete(true)}
      >
        Completed
      </button>
      <div className="todoContainer" >
        <h2>My Tasks:</h2>
        {toDos?.map((toDo, index) => {
          return (
            <div key={index}>
            <h3>{toDo.title}</h3>
            <p>{toDo.description}</p>
            
            </div>
          )
        })}
      </div>
    </div>
  );
};
