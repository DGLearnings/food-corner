import React from 'react'

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../../components/custom-button/custom-button.component';
import CheckOutItem from '../../components/cart-item/checkout-item.component';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';


import "./checkout.styles.scss";


const CheckOutPage = ({ cartItems, cartTotal, history, dispatch }) => (
    <div className="checkout-page">
        <div className="name">
            My Order Summary
        </div>
        <br />
        <div className=''>
            <div className=''>
                {cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CheckOutItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                    <span className='empty-message'>Your cart is empty</span>
                )}
            </div>
            <div className="total">Your Shopping Amount :
                {
                    cartTotal
                }
            </div>
            <br />
            <div>
                <CustomButton
                    onClick={() => {
                        history.push('/Payment');
                    }}
                >
                    Go To Payment
                </CustomButton>
                <br/>
            </div>

        </div>

    </div>


)


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
});


export default withRouter(connect(mapStateToProps)(CheckOutPage));

//{cartItems.map(cartItem => cartItem.quantity * cartItem.price)
 //   .reduce((sum, value) => sum + value, 0)}