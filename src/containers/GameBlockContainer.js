import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { firebaseApp } from '../config/firebase'
import _ from 'lodash';
import { Icon } from 'react-icons-kit'
import {ic_check} from 'react-icons-kit/md/ic_check'
import {ic_close} from 'react-icons-kit/md/ic_close'
import '../styles/gameblock.css'
import Button from '@material-ui/core/Button'

class GameBlockContainer extends Component {
    constructor(props) {
        super(props);
        this.itemRef = firebaseApp.database()
        this.state = {
            question: {},
            activities: []
        }
    }

    componentDidMount() {
        this.itemRef.ref(`/rooms/${this.props.match.params.id}`).on('value', (snapshot) => {
            const roomInfo = snapshot.val();
            var questionList = Object.values(roomInfo.questionGroup.questionList).map(function (obj) {
                return obj;
            });
            var activities = roomInfo.activities;
            var question = {}

            for (var i = 0; i < questionList.length; i++) {
                if(questionList[i].status == 1) {
                    question = questionList[i];
                    break;
                }
            }
           
            this.setState({
                question: question,
                questionList: questionList,
                activities: activities
            })
        })
    }

    setPoint = () => {
        var activities = this.state.activities.map((obj, index) => {
            var totalPoint = obj.totalpoint;
            var answers = obj.answers.map((ansObj, index) => {
                if(ansObj.questionId == this.state.question.id) {
                    var point = 0;
                    
                    if(ansObj.answer == this.state.question.rightAnswer) {
                        var timeAnswer = ansObj.timesubmit - ansObj.timestart;
                        if(this.state.question.timeout > (timeAnswer / 1000) && timeAnswer > 0) {
                            point = Math.round((this.state.question.timeout * 1000 - timeAnswer)/100);
                        }
                    }
                    totalPoint += point;

                    return {
                        ...ansObj,
                        point: point 
                    }
                } else {
                    return ansObj;
                }
            })
            
            return {
                ...obj,
                totalpoint: totalPoint,
                answers: answers
            }
        })

        this.itemRef.ref(`/rooms/${this.props.match.params.id}`).update({
            activities: activities
        }); 
    }

    showLeaderboard = () => {
        this.setPoint();
        // this.itemRef.ref(`/rooms/${this.props.match.params.id}`).update({
        //     status: 2
        // }); 
        this.props.history.push(`/leaderboard/${this.props.match.params.id}`);
    }

    render() {
        return (
            <div className='container'>
                <div className='header'>
                    <p className='title'>{this.state.question.content}</p>
                </div>
                <div className="content">
                    <Button variant="contained" color="secondary" onClick={this.showLeaderboard} style={{float: 'right', height: '40px'}}>Xếp hạng</Button>
                </div>
                <div className="answer">
                    {
                        !_.isEmpty(this.state.question) &&
                        this.state.question.answerList.length > 0 &&
                        this.state.question.answerList.map((answer, i) => {
                            return(
                                <div key={i} className='answerItem' style={{backgroundColor: answer.position == this.state.question.rightAnswer ? 'green' : 'red' }}>
                                    <p className='answerText'>
                                        {answer.content}
                                        <Icon  style={{marginLeft: 50}} size={50} icon={answer.position == this.state.question.rightAnswer ? ic_check : ic_close}/>
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(GameBlockContainer)