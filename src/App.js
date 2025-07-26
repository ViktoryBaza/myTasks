import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

import TaskForm from "./components/TaskForm/TaskForm";
import Filter from "./components/Filter/Filter";
import TaskItems from "./components/TaskItems/TaskItems";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const deleteItem = (id) => {
    setItems((prev) => prev.filter((task) => task.id !== id));
  };

  const newItem = () => {
    if (title.trim() !== "" || description.trim() !== "") {
      const newItem = {
        id: uuidv4(),
        title: title,
        description: description,
        status: "pending",
      };
      setItems((items) => [...items, newItem]);
      setTitle("");
      setDescription("");
    } else {
      alert("Заполните минимум одно поле");
    }
  };

  return (
    <div className="App">
      <TaskForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        newItem={newItem}
      />
      <Filter filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
      <TaskItems
        items={items}
        filterStatus={filterStatus}
        deleteItem={deleteItem}
        setItems={setItems}
      />
    </div>
  );
}

export default App;
