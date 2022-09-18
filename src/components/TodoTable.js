import TodoRow from "./TodoRow";
import TodoControls from "./TodoControls";

function TodoTable({ tasks, toggleTask, filter = false ,setTask,theme}) {
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
        />
      ));
  };

  return (
    <div className={(!theme) ? "todoApp__table" : "todoApp__table--light"}>
      {taskRows(filter)}
      {taskRows(true)}
      <TodoControls tasks={tasks} filter={false} setTask={setTask} theme={theme}/>
    </div>
  );
}

export default TodoTable;
