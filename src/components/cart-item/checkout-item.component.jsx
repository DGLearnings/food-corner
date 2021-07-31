import React from 'react';

//import './cart-item.styles.scss';

import './checkout-item.styles.scss';


//import Image from 'react-bootstrap/Image'

import { selectCartItems, selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { addItem, removeItem } from "../../redux/cart/cart.actions";
import { withRouter } from 'react-router-dom'




const CheckOutItem = ({ invokeaddItem, invokeremoveItem, cartItems, itemCount, item, linkUrl, history, match, location }) => {


    const { imageUrl } = item;

    return (
        <div>
            <div className={`${item.size} product-item`}
            >

                <div className="background-image"
                    style={
                        {
                            backgroundImage: `url(${imageUrl})`
                        }
                    }

                ></div>
                <div>
                    <h1 className="name">{item.name}</h1>

                    <button style={{ marginRight: "0.8em", borderColor: 'black', backgroundColor: 'lightblue' }} onClick={() => invokeaddItem(item)}>Add to cart
                    </button>
                    <button style={{ marginRight: "0.8em", borderColor: 'black', backgroundColor: 'lightblue' }} onClick={() => invokeremoveItem(item)}>Remove from cart
                    </button>
                    <div>
                        <div> <span> <b> Per Plate Cost : {item.quantity * item.price}</b></span></div>
                        <span><b>{item.quantity} * {item.price}</b></span>
                    </div>
                </div>
            </div>

        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    invokeaddItem: (item) => dispatch(addItem(item)),
    invokeremoveItem: (item) => dispatch(removeItem(item)),
});

const mapStateToProps = createStructuredSelector({
    cartItemCount: selectCartItemsCount,
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CheckOutItem));