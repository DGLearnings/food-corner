import React from 'react'
import { withRouter } from 'react-router-dom'
import { useDispatch } from "react-redux";

import "./food-item.style.scss";

import { connect } from 'react-redux'
import { addItem, removeItem } from "../../redux/cart/cart.actions";


const FoodItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatchaction = useDispatch();

  function dispatchAddItem() {
    dispatchaction(addItem(item));
  }
  function dispatchRemoveItem() {
    dispatchaction(removeItem(item));
  }
  return (
    <div className="food-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />


      <div className="food-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <div style={{ marginTop: "1.6em" }}>
        <button style={{ marginRight: "0.5em", marginBottom: "1.0em"}} onClick={() => dispatchAddItem(item)}>Add to Cart
        </button>
        <button style={{ marginRight: "0.5em", marginBottom: "1.0em" }} onClick={() => dispatchRemoveItem(item)}>Remove from Cart
        </button>
      </div>
    </div>
  )

}


export default withRouter(connect(null)(FoodItem));
