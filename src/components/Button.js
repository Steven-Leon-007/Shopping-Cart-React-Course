import { Component } from 'react';

const styles = {
    button: {
        width: '100%',
        padding: '.5rem',
        backgroundColor: '#d4a841',
        border: '1px solid #000',
        borderRadius: '.3rem',
        cursor: 'pointer',
    }
}

class Button extends Component {
    
    // So, in this example the props that are passed through spread operator comes from "Product",
    // Also, if we see on Product we can see that their properties are also passed from "Products",
    // and again if we see where are the properties of products we can see that comes from "App",
    // That's where we define the state and the onClick function, so like that we test if we pass the properties correctly.
    
    
    // Remind to use Rest and Spread operator, so useful
    render() {
        return (
            <button {...this.props} style={styles.button}/>
        )
    }
}

export default Button;