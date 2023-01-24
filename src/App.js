import { Component } from 'react';
import Products from './components/Products';
import Layout from './components/Layout';
import Title from './components/Title';
import './App.css';

class App extends Component {

  state = {
    products: [
      { name: "Tomate", price: 1500, img: "./products/tomate.png" },
      { name: "Arbejas", price: 2500, img: "./products/arbejas.png" },
      { name: "Lechuga", price: 500, img: "./products/lechuga.png" },
    ],
  }

  render() {
    return (
      <div>
        <Layout>
          <Title />
          <Products
            addCart={() => console.log("placeholder")}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}


export default App;
