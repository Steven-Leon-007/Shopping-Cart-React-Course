import { Component } from 'react';
import Product from './Product'


const styles = {
    products: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '2rem'
    }
}

class Products extends Component {
    render() {
        const { products, addCart } = this.props;
        // This component with map (map the product array) print the component "Product" all the times that find a product 
        return (
            <div style={styles.products} className={"products-container"}>
                {products.map(product =>
                    <Product
                        addCart={addCart}
                        key={products.name}
                        product={product}
                    />)}
            </div>
        )
    }
}

export default Products;