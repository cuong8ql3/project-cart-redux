import React, { Component } from 'react';
import * as Message from './../constants/Message';

class Product extends Component {
    render() {
        let { product} = this.props;
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={ product.img } className="img-fluid" alt={ product.name } />
                        <a href="/#">                       
                            <div className="mask waves-light waves-effect waves-light" />
                        </a>                       
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <p>{product.name}</p>
                            </strong>
                        </h4>
                        <ul className="rating">
                            <li>
                                {this.showRaiting(product.raiting)}
                            </li>         
                        </ul>
                        <p className="card-text">
                            {product.desc}
                        </p>
                        <div className="card-footer">
                            <span className="left">{product.price}$</span>
                            <span className="right">
                                <p 
                                    className="btn-floating blue-gradient" 
                                    data-toggle="tooltip" 
                                    data-placement="top" 
                                    title="Add to Cart"
                                    onClick = { () => this.onAddToCart(product) }
                                >
                                    <i className="fa fa-shopping-cart" />
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    onAddToCart = product => {
        this.props.onAddToCart(product);
        this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
    }

    showRaiting(raiting){
        let result = [];
        for (let i = 1; i <= raiting; i++) {
            result.push(<i key={i} className="fa fa-star" />)          
        }
        for (let j = 1; j <= (5 - raiting); j++) {
            result.push(<i key={j+5} className="fa fa-star-o" />)          
        }
        return result;      
    }
}

export default Product;