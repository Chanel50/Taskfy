import React from 'react';
import CreateTache from '../src/components/CreateTache';
import UpdateTache from '../src/components/UpdateTache';
import DeleteTache from '../src/components/DeleteTache';
import SearchTache from '../src/components/SearchTache';
import TacheList from '../src/components/TacheList';

function App() {
  return (
    <div>
      <CreateTache />
      <UpdateTache />
      <DeleteTache />
      <SearchTache />
      <TacheList />
    </div>
  );
}

export default App;

 
