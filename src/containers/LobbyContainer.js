import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Icon } from 'react-icons-kit'
import {info} from 'react-icons-kit/icomoon/info'
import '../styles/lobby.css'
import Button from '@material-ui/core/Button';
import { firebaseApp } from '../config/firebase'
import randomColor from 'randomcolor'

class LobbyContainer extends Component {
    constructor(props) {
        super(props);
        this.itemRef = firebaseApp.database()
        this.state = {
            roomInfo: {},
            activities: [],
            questionList: []
        }
    }

    componentWillMount() {
        // var roomId = this.props.match.params.id
        var roomId = 0

        this.itemRef.ref('/rooms').child(roomId).on('value', (snapshot) => {
            var roomInfo = snapshot.val()
            var questionList = roomInfo.questionGroup
            var activities = Object.values(roomInfo.activities)
            console.log('-------------------------------fffff', activities)

            this.setState({
                roomInfo: roomInfo,
                activities: activities,
                questionList: questionList
            })
        })

    }

    updateRoomStatusAndReadyGame = () => {
        // var roomId = this.props.match.params.id
        var roomId = 0
        this.itemRef.ref('rooms/' + roomId).update({status: 3});
        this.props.history.push('/getready')
    }
    
    render() {
        console.log('------------------------leng', this.state.activities.length)
        return(
            <div className='container'>
                <div className='header'>
                    <div>
                        <p className='title'>Join at Kudo with Game PIN: { this.state.roomInfo && this.state.roomInfo.roomPin}</p>
                    </div>
                </div>
                <div className="mydiv">
                    <div style={{flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <div 
                            // className='playerCount'
                            style={{flex: 1}}
                        >
                            <div style={{margin: '0 auto', width: 100}}>
                            <i className='number'>{this.state.activities.length}</i> <br />
                            <i className='countLabel'>player</i>
                            </div>
                            
                        </div>
                        <div style={{flex: 8}}></div>
                        <div style={{flex: 1}}>
                            <div style={{margin: '0 auto', width: 100}}>
                                <Button  variant="contained" onClick={this.updateRoomStatusAndReadyGame}>
                                    Start
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', flex: 5, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap'}}>
                            {
                                this.state.activities.length > 0 &&
                                this.state.activities.map((user, i) => {
                                    return(
                                        <div style={{width: 200, height: 80, margin: 'auto'}} key={i}>
                                            <p style={{ textAlign: 'center', fo5ntWeight: 'bold', fontSize: 30, color: randomColor()}} >{user.playername}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                </div>
                <div className='waiting'>
                        <Icon icon={info} size={60} color style={{marginLeft: 30, color: 'white'}} />
                        <p className='wating-text'>Waiting for players...</p>
                </div>
            </div>
        )
    }
}

export default withRouter(LobbyContainer)