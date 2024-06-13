import { React, useState } from "react";
import { TaskForm } from "./TaskForm";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const TaskList = ({ toDos, addTodos, removeTodos }) => {
  const [isComplete, setIsComplete] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodos(title, description);
    setTitle("");
    setDescription("");
  };

  const handleAddCompleted = () => {};

 

  return (
    <div className="buttonSort">
      <TaskForm
        title={title}
        setNewTitle={setTitle}
        description={description}
        setNewDescription={setDescription}
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
        <h2>My Tasks:</h2>
      <div className="todoContainer">
        {toDos?.map((toDo, index) => {
          return (
            <div key={index}>
              <h3>{toDo.title}</h3>
              <p>{toDo.description}</p>
              <button onClick={() => removeTodos(index)}><MdDelete /></button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
