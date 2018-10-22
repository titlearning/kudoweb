import React, { Component } from 'react'
import { withRouter } from 'react-router'
import GetReadyContainer from '../containers/GetReadyContainer'

class GetReady extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <GetReadyContainer />
        )
    }
}

export default withRouter(GetReady)