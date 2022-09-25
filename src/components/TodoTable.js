import TodoRow from "./TodoRow";
import TodoControls from "./TodoControls";

function TodoTable({ tasks, toggleTask, filter = false ,setTask,theme,cleanTask,cleanAll}) {
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

  return (
    <div className={(!theme) ? "todoApp__table" : "todoApp__table--light"}>
      {taskRows(filter)}
      {taskRows(true)}
      <TodoControls tasks={tasks} filter={false} setTask={setTask} theme={theme} cleanAll={cleanAll} />
    </div>
  );
}

export default TodoTable;
