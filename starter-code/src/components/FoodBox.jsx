import foods from './../foods.json'
import React, { Component } from 'react';
import FoodCard from './FoodCard.jsx';

class FoodBox extends Component {
  constructor() {
    super();
    this.state = {
      arrfoods: foods
    }
  }

  render() {
    return (
      <div className="foods-container">
        {
        this.state.arrfoods.map((OneFood, index) => {
          return <FoodCard key={index} {...OneFood}/>
        })
      }
      </div>
    )  
  }
}

export default FoodBox;
