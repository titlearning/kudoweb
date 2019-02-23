import React, { Component } from 'react'
import { withRouter } from 'react-router'
import LobbyContainer from '../containers/LobbyContainer'

class Lobby extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <LobbyContainer />
        )
    }
}

export default withRouter(Lobby)