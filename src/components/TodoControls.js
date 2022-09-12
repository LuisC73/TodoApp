import React, { useState} from "react";

function TodoControls({tasks,cleanAll}) {
    const [active, setActive] = useState(false);

    const handleDelete = () => {
        cleanAll()
        console.log("goku");
    }
    return ( 
        <div className="todoApp__controls">
            <p className="todoApp__count">
                {tasks.length} items left
            </p>
            <div className="todoApp__options">
                <p className="todoApp__option todoApp__option--active">All</p>
                <p className={`todoApp__option ${active ? "todoApp__option--active" : ""}`} onClick={() => setActive(!active)}>Active</p>
                <p className="todoApp__option">Completed</p>
            </div>
            <p className="todoApp__clear" onClick={handleDelete}>
                Clear Completed
            </p>
        </div>
     );
}

export default TodoControls;