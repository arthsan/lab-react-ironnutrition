import React, { Component } from 'react';

class AddFood extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      calories: '',
      image: ''
    }
  }

  handlerSubmit(event) {
    event.preventdefault()
  }

  render() {
    return (
      <div className="addfood-container">
        <form>
          <label>Name</label>
          <input type="text" value={this.state.name} onChange={(e)=>this.handlerSubmit(e)}></input>
          <label>Calories</label>
          <input type="text" value={this.state.calories} onChange={(e)=>this.handlerSubmit(e)}></input>
          <label>Image</label>
          <input type="text" value={this.state.image} onChange={(e)=>this.handlerSubmit(e)}></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    )  
  }
}

export default AddFood;