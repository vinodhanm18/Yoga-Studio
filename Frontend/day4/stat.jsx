import React from 'react';
import { Pie } from 'react-chartjs-3';
import '/Users/vinodhanm/React/vinodhan-react/src/assets/css/stat.css';


const StatsComponent = () => {
    
    const data = {
        labels: ['Beginner', 'Intermediate', 'Advanced'],
        datasets: [
            {
                label: 'Yoga Levels',
                data: [50, 50, 30], 
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="stats">
            <h2>Statistics</h2>
            <div className="pie-chart-container">
                <Pie data={data} />
            </div>
            <ul>
                <li><span>Total Classes:</span> 150</li>
                <li><span>Active Members:</span> 130</li>
                <li><span>Revenue:</span> Rs.100000</li>
            </ul>
        </div>
    );
}

export default StatsComponent;
