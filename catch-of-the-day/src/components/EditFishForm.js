import React, { Component } from 'react';

class EditFishForm extends Component {
  name = React.createRef();
  price = React.createRef();
  status = React.createRef();
  desc = React.createRef();
  image = React.createRef();

  onChange = (e) => {
    const fish = {
      ...this.props.fish,
      [e.currentTarget.name]: e.currentTarget.value,
    };
    this.props.updateFish(this.props.index, fish);
  };

  render() {
    return (
      <form className="fish-edit" >
        <input name="name" type="text" value={this.props.fish.name} onChange={this.onChange} placeholder="Name" />
        <input name="price" type="number" value={this.props.fish.price} onChange={this.onChange} placeholder="Price" />
        <select name="status" value={this.props.fish.status} onChange={this.onChange}>
          <option value="avaiable">Available</option>
          <option value="unavaiable">Unavailable</option>
        </select>
        <textarea name="desc" value={this.props.fish.desc} onChange={this.onChange} placeholder="Description" />
        <input name="image" type="text" value={this.props.fish.image} onChange={this.onChange} placeholder="Image" />
      </form>
    );
  }
}

export default EditFishForm;

