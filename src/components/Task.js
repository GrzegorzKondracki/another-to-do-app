import React from 'react';
import '../css/Task.scss';

const Task = (props) => {

    const importantStyle = {
        color: 'rgb(206 4 4)',
        fontWeight: 'bold',
    }
    const doneStyle = {
        textDecoration: 'line-through'
    }



    const { id, text, deadline, important, active } = props.task;

    if (active) {
        return (
            <div className="task">
                <p style={important ? importantStyle : null}>{text}</p>
                <p style={active ? null : doneStyle}>{deadline}</p>
                <button onClick={() => props.done(id)} >done</button>
                <button onClick={() => props.delete(id)} >delete</button>
            </div>
        );
    }

    else {
        return (
            <div className="task">
                <p style={active ? null : doneStyle}>{text}</p>
                <p style={active ? null : doneStyle}>deadline {deadline}</p>
                <button onClick={() => props.delete(id)} >delete</button>
            </div>
        );
    }

}

export default Task;