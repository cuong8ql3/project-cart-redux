import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './css/bootstrap.css';
import './css/mdb.css';



import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';
import MessageContainer from './containers/MessageContainer';


class App extends Component {
  render() {
    return(
      <div>        
        <main id="mainContainer">
          <div className="container">
            <ProductsContainer />
            <MessageContainer />
            <CartContainer />
          </div>
        </main>               
      </div>      
    )
  }
}

export default App;
