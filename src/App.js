import React from 'react'
import TodoList from './TodoList'
import { Link , Route } from 'react-router-dom'

class App extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Route path="/todos" component={TodoList} />
                <Route path="/profile" component={Profile} />
                <Navgation />
            </React.Fragment>
        )
    }
}

const Profile = () => {
    return(
        <div>
            Profile
        </div>
    )
}

const Navgation = () => {
    return(
        <div>
            <Link to="/todos">Todo List</Link>
            <Link to="/profile">Profile</Link>
        </div>
    )
}

export default App