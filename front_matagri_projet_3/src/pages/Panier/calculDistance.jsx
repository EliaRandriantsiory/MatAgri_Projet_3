import React, { useState } from 'react';

function Distance() {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [distance, setDistance] = useState('');

    const handleCalculateDistance = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ origin: origin, destination: destination })
        };

        try {
            const response = await fetch('http://localhost:8082/distance/calculate', requestOptions);
            const data = await response.text();
            setDistance(data);
        } catch (error) {
            console.error('Error calculating distance:', error);
            setDistance('Error calculating distance');
        }
    };

    return (
        <div>
            <h2>Distance Calculator</h2>
            <div>
                <label>Origin:</label>
                <input
                    type="text"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                />
            </div>
            <div>
                <label>Destination:</label>
                <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                />
            </div>
            <button onClick={handleCalculateDistance}>Calculate Distance</button>
            {distance && (
                <p>
                    The driving distance between {origin} and {destination} is {distance}.
                </p>
            )}
        </div>
    );
}

export default Distance;