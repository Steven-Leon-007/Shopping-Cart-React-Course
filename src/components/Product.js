import { Component } from "react";
import Button from './Button';

const styles = {
    products: {
        padding: '1rem 1.5rem',
        margin: '1rem',
        border: '1px solid rgba(0, 0, 0, 0.5)',
        width: '30%',
        borderRadius: '.4rem',
        backgroundColor: '#f2eac0',
    },

    img: {
        width: '90%',
        margin: '.5rem auto',
        display: 'block',
        alignItems: 'center',
    },

}

class Product extends Component {
    render(){
        const { product, addCart } = this.props;

        return(
            <div style={styles.products} className={"products-div"}>
                <img style={styles.img} alt={product.name} src={product.img}/>
                <h3>{product.name}</h3>
                <p>$ - {product.price}</p>
                <Button onClick={() => addCart(product)}>
                    Agregar
                </Button>
            </div>
        )
    }
}

export default Product;