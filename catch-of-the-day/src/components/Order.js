import React, { Component } from 'react';
import { formatPrice } from '../helpers';

class Order extends Component {
  renderOrder = id => {
    const fish = this.props.fishes[id];
    const count = this.props.order[id];
    const isAvailable = fish && fish.status === 'available';
    if (!isAvailable) {
      return (
        <li>
          sorry {fish ? fish.name : 'Unkown fish'} is no longer available
        </li>
      )
    }
    return (
      <li key={id} className="menu-fish">{count} lbs {fish.name}
      {formatPrice(count * fish.price)}</li>
    )
  };

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, id) => {
      const fish = this.props.fishes[id];
      const count = this.props.order[id];
      const isAvailable = fish && fish.status === 'available';
      if (isAvailable) {
        return prevTotal + (count * fish.price);
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul>
          {orderIds.map(id => this.renderOrder(id))}
        </ul>
        <div className="total">
          Total: <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;

