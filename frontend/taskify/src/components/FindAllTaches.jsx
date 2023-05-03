import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FindAllTaches = () => {
  const [taches, setTaches] = useState([]);

  useEffect(() => {
    const fetchTaches = async () => {
      try {
        const response = await axios.get('/api/taches');
        setTaches(response.data);
      } catch (error) {
        console.log(error);
        // show error message
      }
    };
    fetchTaches();
  }, []);

  return (
    <div>
      <h1>All Taches</h1>
      <ul>
        {taches.map((tache) => (
          <li key={tache._id}>{tache.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FindAllTaches;
