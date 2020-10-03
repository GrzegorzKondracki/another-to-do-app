import React, { Component } from 'react';

class SearchBar extends Component {

    state = {
        text: '',
    }

    handleText = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    render() {
        return (
            <>
                <input className="searchInput" type="text" placeholder="type task name" onChange={this.handleText} value={this.state.text} />
            </>
        );
    }
}



export default SearchBar;
