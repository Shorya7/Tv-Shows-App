import React, { useState, useEffect } from 'react';
import "./Shows.css"
const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.error('Error fetching shows:', error);
      }
    };

    fetchShows();
  }, []);

  return (
    <div className='data'>
      <h1>Show List</h1>
      <ul>
        {shows.map(show => (
          <li key={show.show.id}>{show.show.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;

