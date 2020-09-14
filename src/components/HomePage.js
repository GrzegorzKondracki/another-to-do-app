import React, { Component } from 'react';
import AddTask from './AddTask';
import TasksList from './TasksList';
import '../css/HomePage.scss';

class HomePage extends Component {
    counter = 3;
    state = {
        tasks: [
        ]
    }

    addTask = (text, deadline, important) => {
        const task = {
            id: this.counter,
            text: text,
            deadline: deadline,
            important: important,
            active: true
        }
        this.counter++;
        this.setState((prevState) => ({
            tasks: [...prevState.tasks, task]
        }))

        return true;
    }

    deleteTask = (id) => {
        let tasks = [...this.state.tasks];
        tasks = tasks.filter(task => task.id !== id)
        this.setState({
            tasks
        })
    }

    doneTask = (id) => {
        console.log("change w stanie elementu o id " + id);

        const tasks = [...this.state.tasks];
        tasks.forEach(task => {
            if (task.id === id) {
                task.active = false;
            }
        })
        this.setState({
            tasks
        })
    }

    render() {
        return (
            <>
                <div className="mainWrap">
                    <h1>another to do app</h1>
                    <AddTask add={this.addTask} />

                    <TasksList tasks={this.state.tasks} delete={this.deleteTask} done={this.doneTask} />

                </div>
            </>
        );
    }
}

export default HomePage;