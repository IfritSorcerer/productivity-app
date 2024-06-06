import React, { useState } from "react";

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
          value={title}
          onChange={(e) => setNewTitle(e.target.value)}
          required
        />
      <label htmlFor="taskDescrip">Description:</label>
        <input
          htmlFor="taskDescrip"
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
