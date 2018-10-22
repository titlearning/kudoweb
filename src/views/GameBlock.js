import React, { Component } from 'react'
import { withRouter } from 'react-router'
import GameBlockContainer from '../containers/GameBlockContainer'

class GameBlock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <GameBlockContainer />
        )
    }
}

export default withRouter(GameBlock)