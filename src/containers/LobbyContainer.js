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
            question: {},
            roomInfo: {},
            activities: [],
            questionList: [],
            keys: [],
        }
    }

    componentWillMount() {
        this.itemRef.ref(`/rooms/${this.props.match.params.id}`).on('value', (snapshot) => {
            const roomInfo = snapshot.val();

            var questionList = Object.values(roomInfo.questionGroup.questionList).map(function (obj) {
                return obj;
            });
            var question = {}
            for (var i = 0; i < questionList.length; i++) {
                if (questionList[i].status == 0 || questionList[i].status == 3) {
                    question = questionList[i];
                    break;
                }
            }

            var activities = [];
            var keys = [];
           
            if(roomInfo.activities) {
                activities = Object.keys(roomInfo.activities).map(function (key) {
                    return { ...roomInfo.activities[key]};
                });

                keys = Object.keys(roomInfo.activities);
            }
            
            var questionList = Object.values(roomInfo.questionGroup.questionList).map(function (obj) {
                return obj;
            });

            this.setState({
                question: question,
                roomInfo: roomInfo,
                activities: activities,
                questionList: questionList,
                keys: keys
            })
        })
    }

    startRoom = () => {
        if(this.state.question) {
            this.itemRef.ref(`/rooms/${this.props.match.params.id}/questionGroup/questionList/${this.state.question.id}`).update({
                status: 3
            })

            this.state.keys.forEach(element => {
                this.itemRef.ref(`/rooms/${this.props.match.params.id}/activities/${element}`).update({
                    totalpoint: 0,
                    answers: [
                        {
                            answer: -1,
                            point: 0,
                            questionId: this.state.question.id,
                            timestart: 0,
                            timesubmit: 0
                        }
                    ]
                })            
            });
        } 

        this.itemRef.ref(`/rooms/${this.props.match.params.id}`).update({
            status: 1
        });
        this.props.history.push(`/getready/${this.props.match.params.id}`);
    }
    
    render() {
        return(
            <div className='container'>
                <div className='header'>
                    <div>
                        <p className='title'>Join at Kudo with Game PIN: {this.state.roomInfo.roomPin}</p>
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
                                <Button  variant="contained" onClick={this.startRoom}>
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