import React from "react";
import "../styles/taskform.css"
export const TaskForm = ({
  title,
  setNewTitle,
  description,
  setNewDescription,
  handleSubmit,
}) => {
  return (
    
    <form class="taskForm">
      <h4>What needs to get done?</h4>
      <label htmlFor="taskName" id="taskLabel">Task:</label>
      <input
        type="text"
        htmlFor="taskName"
        placeholder="Buy Eggs"
        id="taskInput"
        value={title}
        onChange={(e) => setNewTitle(e.target.value)}
        required
      />
      <br />
      <label htmlFor="taskDescription" id="taskLabel">Description:</label>
      <input
        htmlFor="taskDescripion"
        id="taskInput"
        placeholder="Please don't forget to buy eggs later from the store"
        value={description}
        onChange={(e) => setNewDescription(e.target.value)}
        required
      />
      <button type="submit" id="taskButton" onClick={handleSubmit}>
        Add Task
      </button>
    </form>
  );
};
