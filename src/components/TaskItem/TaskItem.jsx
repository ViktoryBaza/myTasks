import React, { useState } from "react";

import "./TaskItem.css";
function TaskItem({ item, deleteItem, setItems }) {
  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setItems((prev) =>
      prev.map((task) =>
        task.id === item.id ? { ...task, status: newStatus } : task
      )
    );
  };
  const [isOpen, setIsOpen] = useState(false);
  const arrowDown =
    "url(\"data:image/svg+xml;charset=US-ASCII,%3Csvg width='10' height='6' viewBox='0 0 10 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23ffffff' d='M0 0l5 6 5-6z'/%3E%3C/svg%3E\")";
  const arrowUp =
    "url(\"data:image/svg+xml;charset=US-ASCII,%3Csvg width='10' height='6' viewBox='0 0 10 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23ffffff' d='M0 6l5-6 5 6z'/%3E%3C/svg%3E\")";

  return (
    <div key={item.id} className="todo__item">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <label>
        Статус:
        <select
          value={item.status}
          onChange={handleStatusChange}
          onClick={() => setIsOpen(!isOpen)} 
          onBlur={() => setIsOpen(false)}  
          style={{
            backgroundImage: isOpen ? arrowUp : arrowDown,
            borderColor: isOpen ? "#888" : "#444",
          }}
        >
          <option value="pending"> В ожидании</option>
          <option value="in_progress"> В процессе</option>
          <option value="done"> Готово</option>
        </select>
      </label>
      <button className="delete" onClick={() => deleteItem(item.id)}>
        Удалить
      </button>
    </div>
  );
}

export default TaskItem;
