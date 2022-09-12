import TodoControls from "./TodoControls";
import TodoRow from "./TodoRow";

function TodoTable({ tasks, toggleTask}) {
    const taskRows = (doneValue) => {
        return tasks
          .filter((task) => task.done === doneValue)
          .map((task) => (
            <TodoRow task={task} key={task.name} toggleTask={toggleTask} done={doneValue} />
          ));
      };
    
      return (
        <div className="todoApp__table">
            {taskRows(false)}
            
            <TodoControls task={tasks}/>
        </div>
      );
}

export default TodoTable;