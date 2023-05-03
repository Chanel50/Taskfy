import React, { useState } from 'react';
import axios from 'axios';

const CreateTache = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const [categories, setCategories] = useState('');
  const [priority, setPriority] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTache = {
      title,
      description,
      completed,
      categories,
      priority,
    };
    try {
      const response = await axios.post('/api/taches', newTache);
      console.log(response.data);
      // do something with response, like show a success message
    } catch (error) {
      console.log(error);
      // show error message
    }
  };

  return (
    <div>
      <h1>Create New Tache</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="completed">Completed:</label>
        <input
          type="checkbox"
          id="completed"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
        <label htmlFor="categories">Categories:</label>
        <input
          type="text"
          id="categories"
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
        />
        <label htmlFor="priority">Priority:</label>
        <input
          type="text"
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        />
        <button type="submit">Create Tache</button>
      </form>
    </div>
  );
};

export default CreateTache;

