import React, { Component } from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends Component {
  render() {
    return (
      <div className="inventory">
        <h3>Inventory</h3>
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>Load samples</button>
      </div>
    );
  }
}

export default Inventory;
