import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import TodoCreator from "./TodoCreator";
import images from "../helpers/images";
import TodoTable from "./TodoTable";

function TodoApp({ theme, setTheme }) {
  const [taskItems, setTaskItems] = useState([]);
  const [filter, setFilter] = useState(false);

  const createNewTask = (taskName) => {
    if (!taskItems.find((task) => task.name === taskName))
      setTaskItems([...taskItems, { name: taskName, done: false }]);
  };

  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };

  const cleanTask = (task) => {
    setTaskItems(taskItems.filter((el) => el !== task));
  };

  const cleanAll = () => {
    setTaskItems([])
  };

  const filterTask = (option) => {
    switch(option){
      case "all":
        setFilter(null)
        break;
       case "active":
        setFilter(false)
        break;
       case "completed":
        setFilter(true)
        break;
        default:
          console.log("todos");
          break;
    }

  }

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
        <img
          className="todoApp__img"
          src={!theme ? images["bg-desktopDark"] : images["bg-desktopLight"]}
          alt="background"
        />
      </figure>
      <div className="todoApp__container">
        <div className="todoApp__header">
          <h1 className="todoApp__h1">Todo</h1>
          {!theme ? (
            <BsFillSunFill
              className="todoApp__icon"
              onClick={() => setTheme(!theme)}
            />
          ) : (
            <BsMoonFill
              className="todoApp__icon"
              onClick={() => setTheme(!theme)}
            />
          )}
        </div>
        <TodoCreator createNewTask={createNewTask} theme={theme} />
        <TodoTable
          tasks={taskItems}
          toggleTask={toggleTask}
          filter={filter}
          setTask={setTaskItems}
          theme={theme}
          cleanTask={cleanTask}
          cleanAll={cleanAll}
          filterTask={filterTask}
        />
      </div>
    </div>
  );
}

export default TodoApp;
