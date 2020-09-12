import React, { Component } from 'react';
import AddTask from './AddTask';
import TasksList from './TasksList';
import '../css/HomePage.scss';

class HomePage extends Component {
    counter = 3;
    state = {
        tasks: [
            {
                id: 1,
                text: "nauczyć sie reacta",
                deadline: '2020-09-13',
                important: true
            },
            {
                id: 2,
                text: "zmienić pracę",
                deadline: "2020-10-14",
                important: false
            }
        ]
    }

    addTask = (text, deadline, important) => {
        const task = {
            id: this.counter,
            text: text,
            deadline: deadline,
            important: important
        }
        this.counter++;
        this.setState((prevState) => ({
            tasks: [...prevState.tasks, task]
        }))

        return true;
    }
    render() {
        return (
            <>
                <div className="mainWrap">
                    <h1>another to do app</h1>
                    <AddTask add={this.addTask} />
                    <TasksList tasks={this.state.tasks} />
                </div>
            </>
        );
    }
}

export default HomePage;