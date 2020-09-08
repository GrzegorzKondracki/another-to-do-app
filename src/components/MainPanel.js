import React from 'react';
import '../css/MainPanel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStream, faSearch, faFilter, faSort } from '@fortawesome/free-solid-svg-icons';


const MainPanel = () => {
    return (
        <>
            <div className="mainPanel">
                <div className="wrap">
                    <FontAwesomeIcon icon={faStream} size="2x" />
                    <div className="">main panel</div>
                    <div className="newTaskBtn" >new task</div>
                    <div><FontAwesomeIcon icon={faSearch} /> search</div>
                    <div><FontAwesomeIcon icon={faFilter} /> filter</div>
                    <div><FontAwesomeIcon icon={faSort} size="lg" /> sort</div>
                </div>
            </div>
        </>
    );
}

export default MainPanel;