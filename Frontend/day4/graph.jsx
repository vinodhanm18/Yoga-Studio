import React from 'react';
import { Line } from 'react-chartjs-3';
import '/Users/vinodhanm/React/vinodhan-react/src/assets/css/graph.css';

const GraphComponent = () => {
   
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Number of Classes',
                data: [12, 19, 3, 5, 2, 3, 9],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    };

    return (
        <div className="graph">
            <h2>Monthly Classes</h2>
            <Line data={data} />
        </div>
    );
}

export default GraphComponent;
