import React, { useState } from 'react'
import "./Joke.css"

const Joke = () => {
    const [joke, setJoke] = useState('')

    const fetchJoke = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((data) => setJoke(data.joke))
            .catch((error) => {
                console.error("There was an error fetching the joke:", error);
                setJoke("Sorry, we couldn't fetch a joke at the moment.");
            });
    };


    return (
        <div className='joke-div'>
            <button onClick={fetchJoke}>Click to generate a joke</button>
            <p>{joke}</p>
        </div>
    )
}

export default Joke
