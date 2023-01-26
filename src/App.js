import { Component } from 'react';
import Products from './components/Products';
import Layout from './components/Layout';
import Title from './components/Title';
import Navbar from './components/Navbar';
import './App.css';

class App extends Component {

  state = {
    products: [
      { name: "Tomate", price: 1500, img: "./products/tomate.png" },
      { name: "Arbejas", price: 2500, img: "./products/arbejas.png" },
      { name: "Lechuga", price: 500, img: "./products/lechuga.png" },
    ],

    cart: [
      // { name: "Tomate", price: 1500, img: "./products/tomate.png", quantity: 1 },
    ],
  }
  // This is a method but initialized as a property, for prevent this context errors
  // And remind to use concat method, because if you just overwrite the cart array will never add more that 1 item
  addCart = (product) => {

    const { cart } = this.state;

    // I don't really understand this logic, but it works and I have to study it.

    // I'll paste here the chatGPT explain because was correct and easy to understand

    /*This code is checking if a product with the same name as the current product already exists in the cart. 
    If it does, it creates a new array called "newCart" and maps over the existing cart array. 
    For each item in the cart, if the item's name matches the current product's name, a new object is created 
    that includes all of the properties of the original item (spread with ...x) plus a new property quantity 
    with a value of the original item's quantity plus 1. If the item's name does not match the current product's name, 
    the original item is added to the new array without modification. Finally, the component's state is 
    updated with the new cart array.*/

    if (cart.find(x => x.name === product.name)) {
      // newCart will have all the cart items that already have and then validates for add quantity
      const newCart = cart.map(x => x.name === product.name ? ({
        ...x,
        quantity: x.quantity + 1
      }) : x)

      // Here in the setState what we're doing is with our newCart now updated with the new quantity
      // we just overwrite the existing cart, that's all :D
      return this.setState({ cart: newCart });
    }

    return this.setState({
      cart: this.state.cart.concat({ ...product, quantity: 1 })
    })
  }

  render() {

    console.log(this.state.cart);
    return (
      <div>
        <Navbar />
        <Layout>
          <Title />
          <Products
            addCart={this.addCart}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}


export default App;
