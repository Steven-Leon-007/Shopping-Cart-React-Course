import { Component } from 'react';
import BubbleAlert from './BubbleAlert';
import CartDetails from './CartDetails';

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

        // We pass to the button the displayCart method (property) so when is clicked the state will change
        // DisplayCart will open and close the cart each time is clicked
        // isCartOpen will conditional display or not the cart

        const { cart, displayCart, isCartOpen } = this.props;

        // With reduce we iterate over the array of cart, we use "acc" as a accumuler and "el" that is the
        // index we're iterating, and in the function we just increment the accumulator, and start it on 0.

        // I should study a lot array methods, especially map, reduce and filter.

        const quantity = cart.reduce((acc, el) => acc + el.quantity, 0)
        return (
            <div>
                <span style={styles.bubble}>
                    {quantity > 0 ? <BubbleAlert value={quantity} /> : null}
                </span>
                <button style={styles.cart} onClick={displayCart}>
                    Carrito
                </button>
                {isCartOpen ? <CartDetails cart={cart}></CartDetails> : null}
            </div>
        )
    }
}

export default Cart;