import { Component } from "react";

const styles = {
    layout: {
        margin: '2rem auto',
        width: '90%',
    },
}

class Layout extends Component {
    render() {
        return (
            <div style={styles.layout}>
                {this.props.children}
            </div>
        )
    }
}

export default Layout;