import React from 'react';
import '../css/TasksList.scss';
import Task from './Task';

const TasksList = (props) => {
    const tasks = props.tasks

    const list = tasks.map(task => {
        return (
            <Task key={task.id} task={task} />
        )
    })

    return (
        <>
            <div className="tasksList">
                {list}
            </div>
        </>
    );
}

export default TasksList;