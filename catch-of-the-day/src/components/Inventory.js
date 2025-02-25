import React, { Component } from 'react';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';

class Inventory extends Component {
  render() {
    return (
      <div className="inventory">
        <h3>Inventory</h3>
        {Object.keys(this.props.fishes).map(k => (
          <EditFishForm key={k} index={k} fish={this.props.fishes[k]} updateFish={this.props.updateFish} />
        ))}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>Load samples</button>
      </div>
    );
  }
}

export default Inventory;
