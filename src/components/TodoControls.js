function TodoControls() {
    return ( 
        <div className="todoApp__controls">
            <p className="todoApp__count">
                5 items left
            </p>
            <div className="todoApp__options">
                <p className="todoApp__active">All</p>
                <p className="todoApp__active">Active</p>
                <p className="todoApp__active">Completed</p>
            </div>
            <p className="todoApp__count">
                Clear Completed
            </p>
        </div>
     );
}

export default TodoControls;