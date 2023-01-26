import { Component } from 'react';
import BubbleAlert from './BubbleAlert';

const styles = {
    cart: {
        backgroundColor: '#659c49',
        border: 'none',
        padding: '1rem',
        borderRadius: '1rem',
        cursor: 'pointer',
        color: '#fff',
    },

    bubble: {
        position: 'relative',
        left: '15px',
        top: '20px',
    }
}


class Cart extends Component {
    render() {
        return (
            <div>
                <span style={styles.bubble}>
                    <BubbleAlert value={7}/>
                </span>
                <button style={styles.cart}>
                    Carrito
                </button>
            </div>
        )
    }
}

export default Cart;