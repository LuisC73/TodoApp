import React, { useState } from "react";

function TodoCreator({ createNewTask }) {
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName);
    setNewTaskName("");
    console.log(newTaskName);
  };

  return (
    <form className="todoApp__creator" onSubmit={(e) => handleSubmit(e)}>
      <div className="todoApp__check">
        <div className="todoApp__checkMark"></div>
      </div>
      <input
        type="text"
        placeholder="Create a new todo..."
        className="todoApp__input"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
      />
    </form>
  );
}

export default TodoCreator;
