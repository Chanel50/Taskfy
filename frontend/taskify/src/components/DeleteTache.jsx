import React from 'react';
import axios from 'axios';

class DeleteTache extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: '' };
  }

  handleDelete = () => {
    const id = this.props.id;
    axios.delete(`/api/taches/${id}`)
      .then((response) => {
        this.setState({ message: response.data.message });
        this.props.onDelete();
      })
      .catch((error) => {
        this.setState({ message: error.response.data.message });
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleDelete}>Delete</button>
        {this.state.message && <p>{this.state.message}</p>}
      </div>
    );
  }
}

export default DeleteTache;
