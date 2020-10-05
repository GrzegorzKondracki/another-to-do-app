import React, { Component } from 'react';
import AddTask from './AddTask';
import TasksList from './TasksList';
import '../css/HomePage.scss';

class HomePage extends Component {
    counter = 3;
    state = {
        tasks: [],
        inputText: ' '
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
            tasks: [task, ...prevState.tasks]
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

    sortTasks = () => {
        const tasks = [...this.state.tasks];
        tasks.sort(function (a, b) {
            if (a.text.toLowerCase() < b.text.toLowerCase()) return -1;
            if (a.text.toLowerCase() > b.text.toLowerCase()) return 1;
            return 0;
        });
        this.setState({
            tasks
        })
    }

    handleText = (e) => {
        this.setState({
            inputText: e.target.value
        })
    }

    searchTask = () => {
        console.log("search works")
        let tasks = [...this.state.tasks];
        let search = this.state.inputText.trim().toLowerCase();

        // if (search.length > 0) {
        //     searchHandler (event) {
        //     let serachQuery = event.target.value.toLowerCase(),
        //         tasks = tasks.filter((task) => {
        //             let searchValue = task.text.toLowerCase();
        //             return searchValue.indexOf(serachQuery) !== -1;
        //             // return task.text.toLowerCase().match(search);
        //         });
        //     this.setState({
        //         tasks
        //     })
        // }
        // }
    }

    render() {
        return (
            <>
                <div className="mainWrap">
                    <h1>another to do app</h1>
                    <AddTask add={this.addTask} />
                    <TasksList tasks={this.state.tasks} delete={this.deleteTask} done={this.doneTask} sort={this.sortTasks} search={this.searchTask} inputText={this.state.inputText} handleText={this.handleText} />

                </div>
            </>
        );
    }
}

export default HomePage;