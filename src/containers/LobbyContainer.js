import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Icon } from 'react-icons-kit'
import {info} from 'react-icons-kit/icomoon/info'
import '../styles/lobby.css'
import Button from '@material-ui/core/Button';
import { firebaseApp } from '../config/firebase'
import randomColor from 'randomcolor'
import Grid from '@material-ui/core/Grid'
import Key from '@material-ui/icons/VpnKeyRounded';
import Forward from '@material-ui/icons/ForwardRounded';
import moment from 'moment';

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
<<<<<<< HEAD
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
=======
        // var roomId = this.props.match.params.id
        var roomId = 0

        this.itemRef.ref('/rooms').child(roomId).on('value', (snapshot) => {
            var roomInfo = snapshot.val()
            var questionList = roomInfo.questionGroup
            var activities = Object.values(roomInfo.activities)
            console.log('-------------------------------fffff', activities)

            this.setState({
>>>>>>> a230d5e9c67ff94f9155237187e68993c103d21d
                roomInfo: roomInfo,
                activities: activities,
                questionList: questionList,
                keys: keys
            })
        })

    }

<<<<<<< HEAD
    startRoom = () => {
        if(this.state.question) {
            this.itemRef.ref(`/rooms/${this.props.match.params.id}/questionGroup/questionList/${this.state.question.id}`).update({
                status: 3
            })

            this.state.keys.forEach(element => {
                this.itemRef.ref(`/rooms/${this.props.match.params.id}/activities/${element}`).update({
                    totalpoint: 0,
                    bonus: 0,
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
=======
    updateRoomStatusAndReadyGame = () => {
        // var roomId = this.props.match.params.id
        var roomId = 0
        this.itemRef.ref('rooms/' + roomId).update({status: 3});
        this.props.history.push('/getready')
>>>>>>> a230d5e9c67ff94f9155237187e68993c103d21d
    }
    
    render() {
        console.log('------------------------leng', this.state.activities.length)
        return(
            <div className='container'>
                <div className='header'>
<<<<<<< HEAD
                    <Grid container>
                        <Grid item xs={12} style={{paddingTop: '30px'}}>
                            <p className='title'>{this.state.roomInfo.questionGroup && this.state.roomInfo.questionGroup.title}</p>
                        </Grid>
                    </Grid>
=======
                    <div>
                        <p className='title'>Join at Kudo with Game PIN: { this.state.roomInfo && this.state.roomInfo.roomPin}</p>
                    </div>
>>>>>>> a230d5e9c67ff94f9155237187e68993c103d21d
                </div>
                <div className="mydiv">
                    <div style={{flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <div 
                            // className='playerCount'
                            style={{flex: 1}}
                        >
                            <div style={{margin: '0 auto', width: 200, paddingLeft: 20}}>
                            <i className='number'>{this.state.activities.length}</i> <br />
                            <i className='countLabel'>người chơi</i>
                            </div>
                            
                        </div>
                        <div style={{flex: 8}}>
                            <p className='title' style={{fontSize: '70px', fontWeight: 900, fontStyle: 'italic'}}> <a style={{fontSize: '50px'}}>Mã PIN: </a> {this.state.roomInfo.roomPin}</p>
                        </div>
                        <div style={{flex: 1}}>
<<<<<<< HEAD
=======
                            <div style={{margin: '0 auto', width: 100}}>
                                <Button  variant="contained" onClick={this.updateRoomStatusAndReadyGame}>
                                    Start
                                </Button>
                            </div>
>>>>>>> a230d5e9c67ff94f9155237187e68993c103d21d
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
                    <div style={{flex: 5}}>
                        <Icon icon={info} size={50} color style={{marginLeft: 30, color: 'white'}} />
                        <p className='wating-text'><i style={{fontWeight: 600}}>Chờ người chơi tham gia...</i></p>
                    </div>
                    <div style={{margin: '0 auto', width: 100, flex: 5}}>
                        <Button variant="outlined" onClick={this.startRoom} style={{float: "right", marginRight: '20px'}}>
                            <p style={{fontWeight: 900, fontSize: 30, fontStyle: 'italic', color: 'white', paddingRight: '10px', marginBottom: 0}}>Start</p><Forward style={{color: 'white', fontSize: '40px'}}></Forward>
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(LobbyContainer)