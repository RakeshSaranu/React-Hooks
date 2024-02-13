import React, { useEffect, useState } from 'react';

function Example() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await fetch(`https://v2.jokeapi.dev/joke/Any`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setJoke(data.joke);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchJoke();
  },[]); // Empty dependency array to run the effect only on mount

  return (
    <div>
      <h1>JOKE GENERATOR</h1>
      <h4>Refresh the browser to see the joke</h4>
      <h5>{joke}</h5>
    </div>
  );
}

export default Example;
