import React, { Component } from 'react'
import { withRouter } from 'react-router'
import HomeContainer from '../containers/HomeContainer'

class Home extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return(
            <HomeContainer />
        )
    }
}

export default withRouter(Home)