import React from 'react';
import '../css/TasksList.scss';
import Task from './Task';

const TasksList = (props) => {
    const tasks = props.tasks

    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);

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

    return (
        <>


            <div>
                {activeList.length > 0 ? <h2>active tasks</h2> : null}
                {activeList.length > 0 ? (
                    <div className="tasksList">
                        <div className="bar">
                            <p>task</p>
                            <p>deadline</p>
                            <button>sort</button>
                            <button>search</button>
                        </div>
                    </div>
                ) : null
                }
                {activeList.length > 0 ? activeList : <p>nothing to do</p>}
            </div>

            <div className="tasksList">
                {doneList.length > 0 ? <h2>done tasks</h2> : null}
                {doneList}
            </div>
        </>
    );
}

export default TasksList;