import React from "react";

import BarGraph from "./BarGraph";

const TopStations = ({ rentals, count }) => {
    const stations = rentals.reduce((totals, rental) => {
        totals[rental.start_station_id] = totals[rental.start_station_id] + 1 || 1;
        totals[rental.end_station_id] = totals[rental.end_station_id] + 1 || 1;

        return totals;
    }, {});

    const topStations = Object.keys(stations).sort((a,b) => stations[a] < stations[b] ? 1 : -1).slice(0, count);

    const labels = Object.values(topStations).map(station => `Station ${station}`);

    const datasets = [
        {
            label: 'Rentals',
            data: topStations.map(station => stations[station]),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ];

    return (<BarGraph labels={labels} title={`Top ${count} Stations`} datasets={datasets} />);
};

export default TopStations;