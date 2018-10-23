import React, {Component} from 'react'
import {withRouter} from 'react-router'
import {Icon} from 'react-icons-kit'
import {info} from 'react-icons-kit/icomoon/info'
import '../styles/lobby.css'
import Button from '@material-ui/core/Button';

class LobbyContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='container'>
                <div className='header'>
                    <div>
                        <p className='title'>Join at Kudo with Game PIN: 6872750</p>
                    </div>
                </div>
                <div className="mydiv">
                    <div className='playerCount'>
                        <i className='number'>0</i> <br/>
                        <i className='countLabel'>player</i>
                    </div>
                    {/* <div className='col'>
                        <p>dsfsdfsdf</p>
                    </div> */}
                    <div>
                        <Button className='buttonStart' variant="contained"
                                onClick={() => this.props.history.push('/getready')}>
                            Start
                        </Button>
                    </div>
                </div>
                <div className='waiting'>
                    <Icon icon={info} size={60} color style={{marginLeft: 30, color: 'white'}}/>
                    <p className='wating-text'>Waiting for players...</p>
                </div>
            </div>
        )
    }
}

export default withRouter(LobbyContainer)