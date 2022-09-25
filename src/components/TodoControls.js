import React, { useState } from "react";

function TodoControls({
  tasks,
  filter = false,
  setTask,
  theme,
  cleanAll,
  filterTask,
}) {
  const [active, setActive] = useState(false);

  const handleDeleteAll = () => {
    cleanAll();
  };

  const handleFilter = (option) => {
    filterTask(option)
    setActive(!active)
  }

  return (
    <div className={!theme ? "todoApp__controls" : "todoApp__controls--light"}>
      <p className="todoApp__count">{tasks.length} items left</p>
      <div className="todoApp__options">
        <p
          className="todoApp__option todoApp__option--active"
          onClick={() => handleFilter("all")}
        >
          All
        </p>
        <p
          className={`todoApp__option ${
            active ? "todoApp__option--active" : ""
          }`}
          onClick={() => handleFilter("active")}
        >
          Active
        </p>
        <p className="todoApp__option" onClick={() => filterTask("completed")}>
          Completed
        </p>
      </div>
      <p className="todoApp__clear" onClick={handleDeleteAll}>
        Clear Completed
      </p>
    </div>
  );
}

export default TodoControls;
