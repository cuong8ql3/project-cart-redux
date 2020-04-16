import React, { Component } from 'react';
import { connect } from 'react-redux';
//TypeChecking With PropTypes
import PropTypes from 'prop-types';

import Products from '../components/Products';
import Product from '../components/Product';

import { actAddToCart, actChangeMessage } from './../actions/index';


class ProductsContainer extends Component {
    render() {
        var { products } = this.props;
        return (
            <Products>
                {this.showProducts(products)}
            </Products>           
        )
    }
    showProducts(products){
        var result =null;
        var { onAddToCart, onChangeMessage } = this.props;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product 
                    key={ index } 
                    product={ product }
                    onAddToCart = { onAddToCart }
                    onChangeMessage = { onChangeMessage }
                />
            });
        }
        return result;
    }    
}

// kiểm tra dữ liệu props có phù hợp không:
ProductsContainer.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            desc: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            raiting: PropTypes.number.isRequired 
        })

    ).isRequired, // isRequired: bắt buộc phải có
    onChangeMessage : PropTypes.func.isRequired
}


// Chuyển State từ Store thành Props cho Components
const  mapStateToProps = state => { 
    return {
        products: state.products
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product,1));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        }

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer);