import { Component } from 'react';

const styles = {
    bubbleAlert: {
        backgroundColor: '#e9725a',
        color: '#fff',
        borderRadius: '1rem',
        padding: '.2rem .6rem',
        fontSize: '1rem',
        width: '1rem',
        border: '1px solid #27242487',
    }
}

class BubbleAlert extends Component {

    getNumber(number) {
        if (!number) {
            return '';
        }

        return number > 9 ? '9+' : number;
    }

    render() {

        const { value } = this.props;

        return (
            <span style={styles.bubbleAlert}>
                {this.getNumber(value)}
            </span>
        )
    }
}

export default BubbleAlert;