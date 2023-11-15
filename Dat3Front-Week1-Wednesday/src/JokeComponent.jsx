import React, { useState, useEffect } from 'react';

function JokeComponent() {
    // State to store the joke
    const [joke, setJoke] = useState('');

    function fetchChuckJoke() {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(data => setJoke(data.value))
            .catch(error => console.error('Error fetching joke:', error));
    }

    function fetchDadJoke() {
        fetch('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } })
            .then(response => response.json())
            .then(data => setJoke(data.joke))
            .catch(error => console.error('Error fetching joke:', error));
    }

    // useEffect to fetch the joke
    useEffect(() => {
        fetchChuckJoke();
        const intervalId = setInterval(fetchDadJoke, 10000);

        return () => {
            clearInterval(intervalId);
        }
    }, []); // Empty dependency array means this runs once on mount

    // Render the joke
    return (
        <div>
            <p>{joke}</p>
            <button onClick={fetchChuckJoke}>Get new Chuck</button>
            <button onClick={fetchDadJoke}>Get new Dad</button>
        </div>
    );
}

export default JokeComponent;
