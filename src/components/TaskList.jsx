import { React, useEffect, useState } from "react";
import { TaskForm } from "./TaskForm";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "../styles/tasklist.css";

export const TaskList = ({ toDos, setTodos, removeTodos }) => {
  //This state handles checking the current screen and should switch the tabs on the site
  const [isComplete, setIsComplete] = useState(false);

  //This state will handle giving the tasks the "completed" flag and save the array to local storage
  const [completedTodo, setCompletedTodo] = useState(() => {
    const savedCompleted = localStorage.getItem("completedTodo");
    return savedCompleted ? JSON.parse(savedCompleted) : [];
  });

  //These states will handle the task info itself
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...toDos, { title, description }]);
    setTitle("");
    setDescription("");
  };

  const handleAddCompleted = (index) => {
    const now = new Date();
    const completedOn = `${now.getDate()}/${
      now.getMonth() + 1
    }/${now.getFullYear()}/ at ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    const completedTask = {
      ...toDos[index],
      completedOn: completedOn,
    };

    setCompletedTodo([...completedTodo, completedTask]);
    localStorage.setItem("completedTodo", JSON.stringify(setCompletedTodo));

    const updatedTodos = [...toDos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleRemoveCompleted = (index) => {
    setCompletedTodo(() => {
      const updatedCompletedTodo = [...completedTodo];
      updatedCompletedTodo.splice(index, 1);
      localStorage.setItem(
        "completedTodo",
        JSON.stringify(updatedCompletedTodo)
      );
      return updatedCompletedTodo;
    });
  };

  useEffect(() => {
    localStorage.setItem("completedTodo", JSON.stringify(completedTodo));
  }, [completedTodo]);
  return (
    <>
      <TaskForm
        title={title}
        setNewTitle={setTitle}
        description={description}
        setNewDescription={setDescription}
        handleSubmit={handleSubmit}
      />
      <div className="buttonSort">
        <button
          className={`secondaryBtn ${isComplete === false && "active"}`}
          onClick={() => setIsComplete(false)}
        >
          In-Progress
        </button>
        <button
          className={`secondaryBtn ${isComplete === true && "active"}`}
          onClick={() => setIsComplete(true)}
        >
          Completed
        </button>
      </div>
      <div className="todoContainer">
        
        {isComplete === false &&
          toDos.map((toDo, index) => (
            <div key={index} className="taskContainer">
              <div className="task">
                <h3>{toDo.title}</h3>
                <p>{toDo.description}</p>
              </div>
              <div className="buttonRack">
                <button 
                  className="delBtn"
                  onClick={() => removeTodos(index)}>
                  <MdDelete />
                </button>
                <button 
                  className="chkBtn"
                  onClick={() => handleAddCompleted(index)}>
                  <FaCheck />
                </button>
                </div>
              </div>
          ))}

        <div className="completedTasks">
          {isComplete === true &&
            completedTodo.map((completedTask, index) => (
              <div key={index} className="taskContainer">
                <div className="task">
                  <h3>{completedTask.title}</h3>
                  <p>{completedTask.description}</p>
                </div>
                <p>Completed on: {completedTask.completedOn}</p>
                  <button 
                    className="delBtn"
                    onClick={() => handleRemoveCompleted(index)}>
                    <MdDelete />
                  </button>
                </div>
            ))}
        </div>
      </div>
    </>
  );
};
