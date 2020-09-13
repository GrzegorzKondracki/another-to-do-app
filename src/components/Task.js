import React from 'react';
import '../css/Task.scss';

const Task = (props) => {

    const style = {
        color: 'rgb(206 4 4)',
        fontWeight: 'bold'
    }

    const { id, text, deadline, important } = props.task;

    return (
        <div className="task">
            <p style={important ? style : null}>{text}</p>
            <p>deadline {deadline}</p>
            <button onClick={() => props.done(id)} >done</button>
            <button onClick={() => props.delete(id)} >delete</button>
        </div>
    );
}

export default Task;