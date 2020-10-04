import React from 'react';
import '../css/TasksList.scss';
import Task from './Task';
import SearchBar from './SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSort, faSortAlphaDown } from '@fortawesome/free-solid-svg-icons';




const TasksList = (props) => {
    const tasks = props.tasks

    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);

    if (active.length != 0) {

    }


    const activeList = active.map(task => {
        return (
            <Task key={task.id} task={task} delete={props.delete} done={props.done} />
        )
    })

    const doneList = done.map(task => {
        return (
            <Task key={task.id} task={task} delete={props.delete} done={props.done} />
        )
    })

    const searched = active.filter(function (task) {

    })

    return (
        <>
            <div>
                {activeList.length > 0
                    ? <div className="activeTasksHeadline" >
                        <h2>active tasks</h2>
                        <input className="searchInput" type="text" placeholder="type task name" onChange={props.handleText} />
                    </div>
                    : null}
                {activeList.length > 0 ? (
                    <div className="tasksList">
                        <div className="bar">
                            <p>task</p>
                            <p>deadline</p>
                            <button onClick={props.sort} ><FontAwesomeIcon icon={faSortAlphaDown} size="sm" /> sort</button>
                            <button onClick={props.search} ><FontAwesomeIcon icon={faSearch} size="sm" /> search</button>
                        </div>
                    </div>
                ) : null
                }
                {activeList.length > 0 ? activeList : <h2 className="nothingToDo" >nothing to do, add task</h2>}
            </div>

            <div className="tasksList">
                {doneList.length > 0 ? <h2>done tasks</h2> : null}
                {doneList}
            </div>
        </>
    );
}

export default TasksList;