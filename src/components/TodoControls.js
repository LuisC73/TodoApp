function TodoControls({tasks}) {
    return ( 
        <div className="todoApp__controls">
            <p className="todoApp__count">
                {} items left
            </p>
            <div className="todoApp__options">
                <p className="todoApp__option todoApp__option--active">All</p>
                <p className="todoApp__option">Active</p>
                <p className="todoApp__option">Completed</p>
            </div>
            <p className="todoApp__clear">
                Clear Completed
            </p>
        </div>
     );
}

export default TodoControls;