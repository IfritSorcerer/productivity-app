import React from "react";

export const TaskForm = ({
  title,
  setNewTitle,
  description,
  setNewDescription,
  handleSubmit
}) => {
 
  return (
    <form className="taskForm">
      <label htmlFor="taskName">Title:</label>
        <input
          type="text"
          htmlFor="taskName"
          placeholder="Buy Eggs"
          id="taskName"
          value={title}
          onChange={(e) => setNewTitle(e.target.value)}
          required
        />
      <label htmlFor="taskDescription">Description:</label>
        <input
          htmlFor="taskDescripion"
          id="taskDescription"
          placeholder="Please don't forget to buy eggs later from the store"
          value={description}
          onChange={(e) => setNewDescription(e.target.value)}
          required
        />
      <button type="submit" onClick={handleSubmit}>
        Add Task
      </button>
    </form>
  );
};
