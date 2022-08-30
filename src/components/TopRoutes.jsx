import React from "react";

import BarGraph from "./BarGraph";

const TopRoutes = ({ rentals, count }) => {
    const routes = rentals.reduce((totals, rental) => {
        const key = `${rental.start_station_id}-${rental.end_station_id}`;

        if(totals[key]) {
            totals[key].count += 1;
        } else {
            totals[key] = {
                startId: rental.start_station_id,
                startName: rental.start_station_name,
                endId: rental.end_station_id,
                endName: rental.end_station_name,
                count: 1,
            };
        }

        return totals;
    }, {});

    const topRoutes = Object.values(routes).sort((a,b) => a.count < b.count ? 1 : -1).slice(0, count);

    const labels = [...Object.values(topRoutes)].map(route => `${route.startId}→${route.endId}`);

    const datasets = [
        {
        label: 'Rentals',
        data: Object.values(topRoutes).map(route => route.count),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
    ];

    return (<BarGraph labels={labels} title={`Top ${count} Routes`} datasets={datasets} />);
};

export default TopRoutes;