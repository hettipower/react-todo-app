import React from 'react'

const TodoListItem = (props) => {
    return(
        <div>
            <input type="checkbox" checked={props.completed} />
            <span>{props.title}</span>
            <button onClick={() => {props.deleteTodoItembyIndex(props.index)}}>Delete this item</button>
        </div>
    )
}

export default TodoListItem