import React, { Component } from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends Component {
  state = {
    fishes: {},
    order: {},
  };

  addFish = fish => {
    const fishes = {...this.state.fishes};
    fishes[`fish${Date.now()}`] = fish;
    this.setState({
      fishes: fishes,
    });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = index => {
    const order = {...this.state.order};
    order[index] = order[index] + 1 || 1;
    this.setState({ order });
  };

  updateFish = (key, fish) => {
    const fishes = {...this.state.fishes};
    fishes[key] = fish;
    this.setState({
      fishes: fishes,
    });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="fresh seafood market"/>
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(k => (
              <Fish key={k} index={k} details={this.state.fishes[k]} addToOrder={this.addToOrder} />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} updateFish={this.updateFish} fishes={this.state.fishes} />
      </div>
    );
  }
}

export default App;
