import React, { Component } from 'react';
import '../css/AddTask.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStream, faSearch, faFilter, faSort } from '@fortawesome/free-solid-svg-icons';

class AddTask extends Component {
    minDate = new Date().toISOString().slice(0, 10);

    state = {
        text: '',
        deadline: this.minDate,
        checked: false,
    }

    handleText = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleDate = (e) => {
        this.setState({
            deadline: e.target.value
        })
    }

    handleCheckbox = (e) => {
        this.setState({
            checked: e.target.checked
        })
    }

    handleClick = () => {
        console.log('dodaj');

        const { text, deadline, checked } = this.state;
        const add = this.props.add(text, deadline, checked);

        if (add) {
            this.setState({
                text: '',
                deadline: this.minDate,
                checked: false
            })
        }
    }

    render() {
        let maxDate = this.minDate.slice(0, 4) * 1 + 1;
        maxDate = maxDate + "-12-31";

        return (
            <>
                <div className="mainPanel">
                    <div className="wrap">
                        <FontAwesomeIcon icon={faStream} size="2x" />
                        <div>main panel</div>

                        <div className="form">
                            <input type="text" className="addTaskInput" placeholder="add" onChange={this.handleText} value={this.state.text} />

                            <input type="date" value={this.state.deadline} min={this.minDate} max={maxDate} onChange={this.handleDate} className="deadline" />

                            <div className="wrapInsideForm">
                                <input onChange={this.handleCheckbox} type="checkbox" checked={this.state.checked} className="checkbox" id="checkbox-priority" />
                                <label htmlFor="checkbox-priority">important</label>
                            </div>
                        </div>

                        <div className="newTaskBtn" onClick={this.handleClick}>add task</div>

                    </div>
                </div>
            </>
        );
    }
}

export default AddTask;