import React, { useEffect, useState } from 'react';

import AgePerStation from './AgePerStation';
import HourlyRentals from './HourlyRentals';
import TopRides from './TopRides';
import TopRoutes from './TopRoutes';
import TopStations from './TopStations';

const Dashboard = ({ settings }) => {
    const { api, app } = settings;

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(api.url)
            .then(res => res.json())
            .then(
                (result) => {
                setIsLoaded(true);
                setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [api.url]);

    return (
        <div>
            { error && (<div>Error: {error.message}</div>) }

            { !error && (
                <div>
                    { !isLoaded && (<div>Loading ...</div>) }
                    { isLoaded && (
                        <div>
                            <HourlyRentals rentals={items} />
                            <AgePerStation rentals={items} />
                            <TopRoutes rentals={items} count={5} />
                            <TopStations rentals={items} count={5} />
                            <TopRides rentals={items} count={5} />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Dashboard;