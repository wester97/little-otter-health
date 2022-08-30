import React from "react";

import {
    Chart as ChartJS,
    CategoryScale,
    BarController,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Card from "./Card";

ChartJS.register(
    CategoryScale,
    BarController,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

const BarGraph = ({ labels, title, datasets }) => {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
            position: 'top',
          },
          title: {
            display: true,
            color: '#032548',
            text: title,
            font: {
                size: 24,
            }
          },
        },
    };

    const data = {
        labels,
        datasets: datasets.map(set => (
            {
                label: set.label,
                data: set.data,
                borderColor: 'rgb(3, 37, 72)',
                backgroundColor: 'rgba(3, 37, 72, 0.8)',
            }
        )),
    };

    return (
        <Card>
            <Bar options={options} data={data} />
        </Card>
    );
};

export default BarGraph;