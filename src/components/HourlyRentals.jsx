import React from "react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Card from "./Card";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        color: '#032548',
        display: true,
        text: 'Hourly Rentals',
        font: {
            size: 24,
        }
      },
    },
};

const labels = [...Array(24).keys()];

const HourlyRentals = ({ rentals }) => {
    const hourlyRentals = rentals.reduce((totals, rental) => {
        const rentalHour = new Date(rental.start_time).getHours();
        totals[`${rentalHour}`] = totals[`${rentalHour}`] + 1 || 1;

        return totals;
    }, {});

    const data = {
        labels,
        datasets: [
          {
            label: 'Rentals',
            data: Object.values(hourlyRentals),
            borderColor: 'rgba(3, 37, 72, 0.7)',
            backgroundColor: 'rgba(3, 37, 72, 0.8)',
          }
        ],
    };

    return (
        <Card>
            <Line options={options} data={data} />
        </Card>
    );
};

export default HourlyRentals;