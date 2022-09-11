import { BsFillSunFill, BsMoonFill,BsCheckLg } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import TodoCreator from "./TodoCreator";
import images from "../helpers/images";
import TodoTable from "./TodoTable";

function TodoApp() {
  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const createNewTask = (taskName) => {
    if (!taskItems.find((task) => task.name === taskName))
      setTaskItems([...taskItems, { name: taskName, done: false }]);
  };

  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };

  const cleanTask = () => {
    setTaskItems(taskItems.filter((task) => !task.done));
    setShowCompleted(false);
  };

  useEffect(() => {
    let data = localStorage.getItem("task");
    if (data) setTaskItems(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(taskItems));
  }, [taskItems]);

  return (
    <div className="todoApp">
      <figure className="todoApp__bg">
        <img className="todoApp__img" src={images["bg-desktopDark"]} alt="background"/>
      </figure>
      <div className="todoApp__container">
        <div className="todoApp__header">
          <h1 className="todoApp__h1">Todo</h1>
          <BsFillSunFill className="todoApp__icon" />
        </div>
        <TodoCreator createNewTask={createNewTask} />
        <TodoTable tasks={taskItems} toggleTask={toggleTask} />
      </div>
    </div>
  );
}

export default TodoApp;
