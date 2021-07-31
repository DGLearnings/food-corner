import React from 'react'

import { withRouter } from 'react-router'
import FoodItem from '../food-item/food-item.component'

import "./food-menu.component.scss"

const FoodMenu = ({ location }) => {
  const { menu, branch_name } = location
  
  return (
    <div className="food-list">
      <h1 className="name">Select the food item we deliver to you in {branch_name}</h1>
      <br/>
      {
        menu.map(item => (
          <>
          <FoodItem key={item.id} item={item} />
           
          </>
        ))
      }
    </div>
  );
}

export default withRouter(FoodMenu);
