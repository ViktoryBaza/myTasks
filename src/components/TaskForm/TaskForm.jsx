import React from "react";
import "./TaskForm.css";
function TaskForm({ title, setTitle, description, setDescription, newItem }) {
  return (
    <div className="wrapper">
      <p className="wrapper-title">To-Do List</p>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        type="text"
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="add" onClick={newItem}>
        Add
      </button>
    </div>
  );
}

export default TaskForm;
