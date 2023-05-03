import React from 'react';
import axios from 'axios';
import DeleteTache from './DeleteTache';

class TacheList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { taches: [] };
  }

  componentDidMount() {
    axios.get('/api/taches')
      .then((response) => {
        this.setState({ taches: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleDeleteTache = (id) => {
    const updatedTaches = this.state.taches.filter((tache) => tache._id !== id);
    this.setState({ taches: updatedTaches });
  }

  render() {
    return (
      <div>
        {this.state.taches.map((tache) => (
          <div key={tache._id}>
            <p>{tache.title}</p>
            <DeleteTache id={tache._id} onDelete={() => this.handleDeleteTache(tache._id)} />
          </div>
        ))}
      </div>
    );
  }
}

export default TacheList;
