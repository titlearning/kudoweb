import React, { Component } from 'react'
import { withRouter } from 'react-router'
import ReactDOM from 'react-dom';

class ListQuestion extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return(
            <div>
            
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

export default withRouter(ListQuestion)