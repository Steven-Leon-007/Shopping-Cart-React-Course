import { Component } from 'react';

const styles = {
    detailsDiv: {
        position: 'absolute',
        backgroundColor: '#d5e9b6',
        marginTop: '1rem',
        boxShadow: '1px 5px 5px rgb(0, 0, 0, 0.3)',
        borderRadius: '.3rem',
        width: '280px',
        zIndex: 100,
        right: '0',
        border: '1px solid #32323217'

    },
    detailsTitle: {
        textAlign: 'center',
    },

    detailsContent: {
        margin: '1.3rem auto'
    },

    productImg: {
        width: '5rem',
        float: 'left',
        marginRight: '0.8rem',
    },

    productName: {
        margin: '0.4rem'
    },

    quantity:{
        float: 'left',
        margin: '1rem 1.3rem',
        marginLeft: '0',
        backgroundColor: '#e9725a',
        padding: '0.2rem 0.6rem',
        borderRadius: '1rem',
        textAlign: 'center',
        border: '1px solid #27242487',
        color: '#FFF',
    }
};

class CartDetail extends Component {
    render() {

        const { cart } = this.props;

        return (
            <div style={styles.detailsDiv}>
                <h3 style={styles.detailsTitle}>Detalles</h3>
                <ul>
                    {cart.map(x =>
                        <li key={x.name} style={styles.detailsContent}>
                            <span style={styles.quantity}>{x.quantity}</span>
                            <img src={x.img} alt={` Imagen del producto ${x.name}`} style={styles.productImg} />
                            <h4 style={styles.productName}>{x.name}</h4>
                            <p style={styles.productName}>$ {x.price}</p>
                        </li>)}
                </ul>
            </div>
        )
    }
}


export default CartDetail;