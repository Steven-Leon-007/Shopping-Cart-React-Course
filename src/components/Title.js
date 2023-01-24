import { Component } from 'react';

const styles = {
    title: {
        margin: '1rem',

    }
}

class Title extends Component {
    render(){
        return(
            <h1 style={styles.title}>Supermarket</h1>
        )
    }
}

export default Title;