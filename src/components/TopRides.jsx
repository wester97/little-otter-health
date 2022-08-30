import React from "react";

import BarGraph from "./BarGraph";

const TopRides = ({ rentals, count }) => {

    const rides = rentals.reduce((totals, rental) => {
        totals[rental.bike_id] = totals[rental.bike_id] + rental.tripduration || rental.tripduration;

        return totals;
    }, {});

    const topRides = Object.keys(rides).sort((a,b) => rides[a] < rides[b] ? 1 : -1).slice(0, count);

    const labels = Object.values(topRides).map(station => `Bike #${station}`);

    const datasets = [
        {
            label: 'Minutes',
            data: topRides.map(station => rides[station]),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
    ];

    return (<BarGraph labels={labels} title={`Top ${count} Rides (duration)`} datasets={datasets} />);
};

export default TopRides;