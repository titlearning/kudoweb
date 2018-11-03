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
        this.inputOpenFileRef = React.createRef()
        this.state = {
            roomInfo: {},
            activities: [],
            questionList: []
        }
    }

    componentWillMount() {
        var roomPin = 1
        this.itemRef.ref('/rooms').on('value', (snapshot) => {
            var data = Object.values(snapshot.val()).map(function (obj) {
                return obj;
            });
            const roomInfo = data.filter(item => item.roomPin === roomPin);
            var activities = Object.values(roomInfo[0].activities).map(function (obj) {
                return obj;
            });

            var questionList = Object.values(roomInfo[0].questionGroup.questionList).map(function (obj) {
                return obj;
            });

            this.setState({
                roomInfo: roomInfo[0],
                activities: activities,
                questionList: questionList
            })
        })
    }

    showOpenFileDlg = () => {
        this.inputOpenFileRef.current.click()
    }
    
    render() {
        return(
            <div className='container'>
                <div className='header'>
                    <div>
                        <p className='title'>Join at Kudo with Game PIN: 6872750</p>
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
                                <Button  variant="contained" onClick={() => this.props.history.push('/getready')}>
                                    Start
                                </Button>
                            </div>
                            <div>
                                <Button onClick={this.showOpenFileDlg}>
                                <input ref={this.inputOpenFileRef} type="file" style={{display:"none"}}/>
                                
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