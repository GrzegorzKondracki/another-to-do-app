import React from 'react';
import MainPanel from './MainPanel';
import TasksList from './TasksList';
import '../css/HomePage.scss';

const HomePage = () => {
    return (
        <>
            <div className="mainWrap">
                <MainPanel />
                <TasksList />
            </div>
        </>
    );
}

export default HomePage;