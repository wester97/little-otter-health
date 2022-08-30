import React from "react";

import BarGraph from "./BarGraph";

const AgePerStation = ({ rentals }) => {
    const avgAges = rentals.reduce((totals, rental) => {
        const now = new Date();
        const age = now.getFullYear() - rental['birth year'];

        if(totals[rental.start_station_id]) {
            let [tCount, tAge] = totals[rental.start_station_id];
            
            tCount += 1;
            tAge = (tAge + age) / tCount;

            totals[rental.start_station_id] = [tCount, age];
        } else {
            totals[rental.start_station_id] = [1, age]
        }

        return totals;
    }, {});

    const labels = [...Object.keys(avgAges)];

    const datasets = [
        {
        label: 'Rentals',
        data: Object.values(avgAges).map(avgAge => avgAge[1]),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
    ];

    return (<BarGraph labels={labels} title="Avg. Age per Station" datasets={datasets} />);
};

export default AgePerStation;