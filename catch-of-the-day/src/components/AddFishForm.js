import React, { Component } from 'react';

class AddFishForm extends Component {
  name = React.createRef();
  price = React.createRef();
  status = React.createRef();
  desc = React.createRef();
  image = React.createRef();

  onSubmit = (e) => {
    e.preventDefault();
    const fish = {
      name: this.name.current.value,
      price: parseFloat(this.price.current.value),
      status: this.status.current.value,
      desc: this.desc.current.value,
      image: this.image.current.value,
    }
    this.props.addFish(fish);

    // reset the form
    e.currentTarget.reset();
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.onSubmit}>
        <input name="name" type="text" ref={this.name} placeholder="Name" />
        <input name="price" type="number" ref={this.price} placeholder="Price" />
        <select name="status" ref={this.status}>
          <option value="avaiable">Available</option>
          <option value="unavaiable">Unavailable</option>
        </select>
        <textarea name="desc" ref={this.desc} placeholder="Description" />
        <input name="image" type="text" ref={this.image} placeholder="Image" />
        <button type="submit">Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
