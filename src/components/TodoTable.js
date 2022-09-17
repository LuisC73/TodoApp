import TodoRow from "./TodoRow";
import TodoControls from "./TodoControls";

function TodoTable({ tasks, toggleTask, filter = false ,setTask}) {
  const taskRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TodoRow
          task={task}
          key={task.name}
          toggleTask={toggleTask}
          done={doneValue}
        />
      ));
  };

  return (
    <div className="todoApp__table">
      {taskRows(filter)}
      {taskRows(true)}
      <TodoControls tasks={tasks} filter={false} setTask={setTask}/>
    </div>
  );
}

export default TodoTable;
