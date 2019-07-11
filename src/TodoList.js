import React from 'react'
import TodoListItem from './TodoListItem'
import './Style.css'
import axios from 'axios'

export default class TodoList extends React.Component{
    constructor(){
        super()
        this.state = {
            list_title : "",
            current_value: '',
            todos : [
            ]
        }
        this.deleteTodoItembyIndex = this.deleteTodoItembyIndex.bind(this)
    }
    

    deleteTodoItembyIndex(index){
        this.setState(prevState => ({
            todos : [
                ...prevState.todos.slice(0, index),
                ...prevState.todos.slice(index + 1)
            ]
        }))
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/todos/5')
        .then(data => this.setState({
            todos : [
                {
                    id : data.data.id,
                    title : data.data.title,
                    completed : data.data.completed
                }
            ]
        }))
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="todoList">
                <h2>Todo List</h2>
                <label>Title</label>
                <br/>
                <input 
                    placeholder="Enter Title..." 
                    type="text" 
                    value={this.state.list_title} 
                    onChange={(event) => {this.setState({ list_title : event.target.value })}}
                />
                <br/>

                {
                    this.state.todos.map((todo , index) => {
                        return(
                            <TodoListItem
                                key={index}
                                index={index}
                                deleteTodoItembyIndex={this.deleteTodoItembyIndex}
                                title={todo.title}
                                completed={todo.completed}
                            />
                        )
                    })
                }

                <input 
                    placeholder="Todo Item Name..." 
                    type="text"
                    value={this.state.current_value}
                    onChange={ (event) => { this.setState({ current_value : event.target.value }) } }
                />
                <button onClick={() => {
                    this.setState(prevState => ({
                        todos : prevState.todos.concat(
                            {title:this.state.current_value , completed: false}
                        ),
                        current_value: ''
                    }))
                }}>Add item to Todo List</button>
            </div>
        )
    }
}