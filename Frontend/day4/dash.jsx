import React from 'react';
import GraphComponent from '/Users/vinodhanm/React/vinodhan-react/src/pages/auth/graph.jsx';
import StatsComponent from '/Users/vinodhanm/React/vinodhan-react/src/pages/auth/stat.jsx';
import '/Users/vinodhanm/React/vinodhan-react/src/assets/css/dash.css';
import Header from '/Users/vinodhanm/React/vinodhan-react/src/pages/auth/head.jsx';

const DashboardPage = () => {
    return (
        <div className='ap'>
            <Header></Header>
        <div className="dashboard">
            
            <h1>Dashboard</h1>
            <div className="graphs"><center>
                <GraphComponent /> </center>
            </div>
            <div className="stats"><center>
                <StatsComponent /></center>
            </div>
        </div>
        </div>
    );
}

export default DashboardPage;
