import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateTache = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'title') {
      setTitle(value);
    } else if (name === 'description') {
      setDescription(value);
    }
  };

  useEffect(() => {
    const fetchTache = async () => {
      const response = await axios.get(`/api/taches/${id}`);
      setTitle(response.data.title);
      setDescription(response.data.description);
    };
    fetchTache();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedTache = { title, description };
    const response = await axios.patch(`/api/taches/${id}`, updatedTache);
    console.log(response.data);
  };

  return (
    <div>
      <h1>Update Tache</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={title} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Description:
          <textarea name="description" value={description} onChange={handleInputChange}></textarea>
        </label>
        <br />
        <button type="submit">Update Tache</button>
      </form>
    </div>
  );
};

export default UpdateTache;


