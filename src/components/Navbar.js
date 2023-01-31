import { Component } from 'react';
import Logo from './Logo';
import Cart from './Cart';

const styles = {

    header: {
        padding: '1rem 0',
        width: '100%',
        backgroundColor: '#c29151a1',
        boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
        borderBottom: '1px solid rgba(0, 0, 0, 0.4)'
    },

    navbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 auto',
        width: '90%',
        position: 'relative',
    }
}

class Navbar extends Component {

    render() {
        const { cart } = this.props;

        return (
            <header style={styles.header}>
                <nav style={styles.navbar}>
                    <Logo />
                    <Cart
                        cart={cart}
                    />
                </nav>
            </header>
        )
    }
}

export default Navbar;