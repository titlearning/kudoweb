import React, { Component } from 'react'
import { withRouter } from 'react-router'
import '../styles/gameblock.css'

class GameBlockContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>
                <div className='header'>
                    <p className='title'>BarmBrack, a fruitcake, is a Halloween Irish tradition. This cake contains:</p>
                </div>
                <div className="content">
                </div>
                <div className="answer">
                    {/* <div className='answerWraper'> */}
                        <div className='answerItem'>
                            <span className='answerText'>special powers that will make you see ghosts</span>
                        </div>
                        <div className='answerItem'>
                            <span className='answerText'>special powers that will make you see ghosts</span>
                        </div>
                        <div className='answerItem'>
                            <span className='answerText'>special powers that will make you see ghosts</span>
                        </div>
                        <div className='answerItem'>
                            <span className='answerText'>special powers that will make you see ghosts</span>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        )
    }
}

export default withRouter(GameBlockContainer)