import TodoRow from "./TodoRow";
import TodoControls from "./TodoControls";

function TodoTable({
  tasks,
  toggleTask,
  filter = null,
  setTask,
  theme,
  cleanTask,
  cleanAll,
  filterTask,
}) {
  const taskRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TodoRow
          task={task}
          key={task.name}
          toggleTask={toggleTask}
          done={doneValue}
          theme={theme}
          cleanTask={cleanTask}
        />
      ));
  };

  const allRow = () => {
    return (
      <>
        {taskRows(true)}
        {taskRows(false)}
      </>
    );
  };

  return (
    <div className={!theme ? "todoApp__table" : "todoApp__table--light"}>
      {filter === null ? allRow() : taskRows(filter)}

      <TodoControls
        tasks={tasks}
        filter={filter}
        setTask={setTask}
        theme={theme}
        cleanAll={cleanAll}
        filterTask={filterTask}
      />
    </div>
  );
}

export default TodoTable;
