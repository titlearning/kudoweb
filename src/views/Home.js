import React, { Component } from 'react'
import { withRouter } from 'react-router'

class Home extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return(
            <div>
                <img style={styles.box} src={require('../images/Fire.png')} />
            </div>
        )
    }
}

const styles = {
    box: {
        width: 200,
        height: 200,
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto'
    }
}

export default withRouter(Home)