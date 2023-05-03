import React, { useState } from 'react';
import axios from 'axios';

function SearchTache() {
  const [catégories, setCatégories] = useState('');
  const [priorité, setPriorité] = useState('');
  const [tacheList, setTacheList] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/searchtache?catégories=${catégories}&priorité=${priorité}`);
      setTacheList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Catégories" value={catégories} onChange={(e) => setCatégories(e.target.value)} />
        <input type="text" placeholder="Priorité" value={priorité} onChange={(e) => setPriorité(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {tacheList.map((tache) => (
          <li key={tache.id}>{tache.nom}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchTache;
