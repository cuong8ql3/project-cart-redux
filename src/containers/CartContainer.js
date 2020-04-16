import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Cart from './../components/Cart';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';

import * as Message from './../constants/Message';
import { actDeleteProductInCart, actChangeMessage, actUpdateProductInCart } from './../actions/index';

class CartContainer extends Component {
    render() { 
        var { cart } = this.props;               
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>          
        )
    }
    showCartItem = (cart) => {
        var result = <tr><td>{ Message.MSG_CART_EMPTY }</td></tr>;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return <CartItem 
                    key={ index } 
                    item={ item }
                    index= { index }
                    onDeleteProductInCart = { this.props.onDeleteProductInCart }
                    onChangeMessage = { this.props.onChangeMessage }
                    onUpdateProductInCart = { this.props.onUpdateProductInCart }
                />
            });
        }
        return result;
    }

    showTotalAmount = (cart) => {
        var result = null;        
        if (cart.length > 0) {
            result = <CartResult cart = { cart }/>
        }
        return result;
    }
}

// kiểm tra dữ liệu props có phù hợp không:
CartContainer.propTypes = {
    cart : PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            desc: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            raiting: PropTypes.number.isRequired
        }).isRequired,
        quantity : PropTypes.number.isRequired

    })).isRequired // isRequired: bắt buộc phải có
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actDeleteProductInCart(product));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actUpdateProductInCart(product, quantity));
        }
    }
}

// Chuyển State từ Store thành Props cho Components

export default connect( mapStateToProps, mapDispatchToProps )(CartContainer);