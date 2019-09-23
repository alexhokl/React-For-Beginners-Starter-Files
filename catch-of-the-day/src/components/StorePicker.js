import React, { Component } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {
  myInput = React.createRef();

  onSubmit = (e) => {
    e.preventDefault();
    console.info(this.myInput.current.value);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.onSubmit}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={this.myInput} />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
