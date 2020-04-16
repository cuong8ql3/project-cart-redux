import React, { Component } from 'react';
import * as Message from './../constants/Message';

class CartItem extends Component {   
    
    render() {
        let { item } = this.props;
        let { quantity } = item.quantity > 0 ? item :  1 ;
        return (
            <tr>
                <th scope="row">
                    <img src={ item.product.img } className="img-fluid z-depth-0" alt={item.product.name}/>
                </th>
                <td>
                    <h5>
                        <strong>{ item.product.name }</strong>
                    </h5>
                </td>
                <td>{ item.product.price }</td>
                <td className="center-on-small-only" id="cart">
                    <span className="qty">{ quantity } </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label 
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick = { () => this.onUpdateQuantity( item.product, quantity - 1 )}
                        >
                            <a href="#cart">—</a>
                        </label>
                        <label 
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick = { () => this.onUpdateQuantity( item.product, quantity + 1 )}
                        >                                
                            <a href="#cart">+</a>
                        </label>
                    </div>
                </td>
                <td>{ item.product.price * item.quantity }$</td>
                <td>
                    <button 
                        type="button" 
                        className="btn btn-sm btn-primary waves-effect waves-light" 
                        data-toggle="tooltip" 
                        data-placement="top" 
                        title="Remove item"
                        onClick = {() =>  this.onDelete(item.product) } 
                    >
                        X
                    </button>
                </td>
            </tr>
        )
    }
    onDelete(product){
        var { onDeleteProductInCart, onChangeMessage } = this.props;
        onDeleteProductInCart(product);
        onChangeMessage(Message.MSG_DEL_PRODUCT_IN_CART_SUCCESS);
    }

    onUpdateQuantity = (product, quantity) => {
        var { onUpdateProductInCart, onChangeMessage } = this.props
        if (quantity > 0) {           
            onUpdateProductInCart(product, quantity);
            onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);                
        }                
    }
}

export default CartItem;