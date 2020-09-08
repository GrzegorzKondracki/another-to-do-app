import React from 'react';
import '../css/TasksList.scss';
import Task from './Task';

const TasksList = () => {
    return (
        <>
            <div className="tasksList">
                <Task />
            </div>
        </>
    );
}

export default TasksList;