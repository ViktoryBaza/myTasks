import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import './TaskItems.css'

function TaskItems({ items, filterStatus, deleteItem, setItems }) {
  return (
    <div className="todo__items">
      {items
        .filter(
          (item) => filterStatus === "all" || item.status === filterStatus
        )
        .map((item) => (
          <TaskItem
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            setItems={setItems}
            items={items}
          />
        ))}
    </div>
  );
}

export default TaskItems;
