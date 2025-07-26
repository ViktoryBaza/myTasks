import React, { useState } from "react";
import "./Filter.css";

function Filter({ filterStatus, setFilterStatus }) {
  const [isOpen, setIsOpen] = useState(false);
  const arrowDown =
    "url(\"data:image/svg+xml;charset=US-ASCII,%3Csvg width='10' height='6' viewBox='0 0 10 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23ffffff' d='M0 0l5 6 5-6z'/%3E%3C/svg%3E\")";
  const arrowUp =
    "url(\"data:image/svg+xml;charset=US-ASCII,%3Csvg width='10' height='6' viewBox='0 0 10 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23ffffff' d='M0 6l5-6 5 6z'/%3E%3C/svg%3E\")";

  return (
    <select
      value={filterStatus}
      onChange={(e) => setFilterStatus(e.target.value)}
      onClick={() => setIsOpen(!isOpen)}
      onBlur={() => setIsOpen(false)}
      className="status-filter"
      style={{
        backgroundImage: isOpen ? arrowUp : arrowDown,
        borderColor: isOpen ? "#888" : "#444",
      }}
    >
      <option value="all">Все</option>
      <option value="pending">В ожидании</option>
      <option value="in_progress">В процессе</option>
      <option value="done">Готово</option>
    </select>
  );
}

export default Filter;
