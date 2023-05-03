import { useState, useEffect } from "react";
import axios from "axios";

function TacheDetails({ match }) {
  const [tache, setTache] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTache = async () => {
      try {
        const response = await axios.get(`/api/taches/${match.params.id}`);
        setTache(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchTache();
  }, [match.params.id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!tache) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{tache.title}</h1>
      <p>{tache.description}</p>
      <p>Priority: {tache.priority}</p>
      <p>Status: {tache.status}</p>
      {/* add more fields here as needed */}
    </div>
  );
}

export default TacheDetails;


