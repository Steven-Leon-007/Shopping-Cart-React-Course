import { Component } from 'react';

const styles = {
    logo: {
        display: 'flex',
        alignItems: 'center',
    },

    h3a:{
        display: 'inline-block',
        margin: '1rem',
        color: '#000',
        textDecoration: 'none',
        fontWeight: '700',
        fontSize: '1.5rem',
    },

    img: {
        width: '5rem'
    }
}

class Logo extends Component {
    render() {
        return(
            <div style={styles.logo}>
                <a href="/"><img src="./products/supermarket-logo.png" alt="Logo" style={styles.img}/></a>
                <a href="/" style={styles.h3a} className={"nav-title"}>MarketPlace</a>
            </div>
        )
    }
}


export default Logo;