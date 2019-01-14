import React, { Component } from 'react'
import { withRouter } from 'react-router'
import LinearProgress from '@material-ui/core/LinearProgress';
import { firebaseApp } from '../config/firebase'
import Firebase from 'firebase'
import _ from 'lodash';
import ReactCountdownClock from 'react-countdown-clock'
import { Icon } from 'react-icons-kit'
import {ic_check} from 'react-icons-kit/md/ic_check'
import '../styles/getready.css';
import { Redirect } from 'react-router-dom';
import rhomb from '../images/rhomb.png';
import circle from '../images/circle.png';
import triangle from '../images/triangle.png';
import square from '../images/square.png';
import moment from 'moment';


const arrColor = ['#ff365b', '#46a1e7', '#ffbf0a', '#67be3c']
const arrShape = [triangle, rhomb, circle, square]

class GetReadyContainer extends Component {
    constructor(props) {
        super(props);
        this.itemRef = firebaseApp.database()
        this.storageRef = firebaseApp.storage()
        this.state = {
            completed: 0,
            question: {},
            questionList: [],
            activities: {},
            showQuestionTitle: true,
            endUpdate: false,
            countQuestion: 0,
            image: '',
            is_complete: false
        }
    }

    componentWillMount() {
        this.itemRef.ref(`/rooms/${this.props.match.params.id}`).on('value', (snapshot) => {
            const roomInfo = snapshot.val();

            var questionList = Object.values(roomInfo.questionGroup.questionList).map(function (obj) {
                return obj;
            });
            console.log('-------------------hahaha', questionList)

            var question = {}

            for (var i = 0; i < questionList.length; i++) {
                if (questionList[i].status == 3 || questionList[i].status == 1) {
                    question = questionList[i];
                    break;
                }
            }

            var count = 0;
            for (var i = 0; i < questionList.length; i++) {
                if (questionList[i].status == 2) {
                    count ++;
                }
            }

            var activities = {};
            if(roomInfo.activities) {
                activities = roomInfo.activities
            }

            var is_complete = true;
            var list_answer_question = [];
  
            if(activities) {
                list_answer_question = Object.values(activities).map(function(obj) {
                    var answers = obj.answers;
                    var isQuit = obj.quit;

                    if(isQuit) {
                        return null;
                    }
                    
                    return answers.find(function(element) {
                        return element.questionId == question.id;
                    })
                })
            } 

            list_answer_question.forEach(element => {
                if(element !== null) {
                    if(element.answer && element.answer <= 0) {
                        is_complete = false;
                    }
                }
            });
         
            if(question.id) {
                this.storageRef.ref(`/question/images/${roomInfo.questionGroupId}/${question.id}`).getDownloadURL().then((url) => {
                    this.setState({
                        image: url
                    })
                })
            }

            this.setState({
                question: question,
                questionList: questionList,
                activities: activities,
                countQuestion: count + 1, 
                is_complete: is_complete
            })
        })
    }

    componentDidMount() {
        this.timer = setInterval(this.progress, 500);
        const timeout = this.state.question.timeout
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    progress = () => {
        const { completed } = this.state;
        
        if (completed === 100) {
            if(!this.state.endUpdate) {
                var timeStart = Firebase.database.ServerValue.TIMESTAMP;
                var keys = Object.keys(this.state.activities);
                keys.forEach(element => {
                    var answers = this.state.activities[element].answers.map((ansObj, i) =>{
                        if(ansObj.timestart == 0) {
                            var newAns = {
                                answer: -1,
                                point: 0,
                                questionId: this.state.question.id,
                                timestart: timeStart,
                                timesubmit: 0
                            }

                            return newAns;
                        } else {
                            return ansObj;
                        }
                    })

                    this.state.activities[element].answers = answers;
                });
               
                this.itemRef.ref(`/rooms/${this.props.match.params.id}`).update({
                    activities: this.state.activities,
                    status: 1
                });

                if(this.state.question) {
                    this.itemRef.ref(`/rooms/${this.props.match.params.id}/questionGroup/questionList/${this.state.question.id}`).update({
                        status: 1
                    })
                } 

                this.setState({
                    showQuestionTitle: false,
                    endUpdate: true
                })
            }
        } else {
            const diff = 10;
            this.setState({ completed: Math.min(completed + diff, 100) });
        }
    };

    onFinish = () => {
        const questionId = this.state.question.id;
        const questionOnNow = this.state.question;
        this.setPoint(questionOnNow);
     
        this.itemRef.ref(`/rooms/${this.props.match.params.id}/questionGroup/questionList/${this.state.question.id}`).update({
            status: 2
        }); 
        this.props.history.push(`/gameblock/${this.props.match.params.id}/${questionId}`);
    }

    setPoint = (questionOnNow) => {
        var activities = this.state.activities;
        var keys = Object.keys(activities);
        var count_question = this.state.questionList.length;
        keys.forEach(element => {
            var obj = activities[element];
            var bonus = obj.bonus;
            var totalPoint = obj.totalpoint;
         
            var answers = obj.answers.map((ansObj, index) => {
                if(ansObj.questionId == questionOnNow.id) {
                    var point = 0;
                    if(ansObj.answer == questionOnNow.rightAnswer) {
                        var timeAnswer = ansObj.timesubmit - ansObj.timestart;
                        if(questionOnNow.timeout > (timeAnswer / 1000) && timeAnswer > 0) {
                            point = Math.round(( 1 - timeAnswer / (questionOnNow.timeout * 1000))*1000);
                            bonus ++;
                        } else {
                            bonus = 0;
                        }
                    } else {
                        bonus = 0;
                    }

                    var bonus_point =  Math.round(bonus * 1000 * 0.5 / count_question);
                    point += bonus_point;

                    totalPoint += point;

                    return {
                        ...ansObj,
                        point: point 
                    }
                } else {
                    return ansObj;
                }
            })

            activities[element].totalpoint = totalPoint;
            activities[element].bonus = bonus;
            activities[element].answers = answers;
        });

        this.itemRef.ref(`/rooms/${this.props.match.params.id}`).update({
            activities: activities
        }); 
    }

    render() {
        return (
            <div className='container'>
                {this.state.is_complete && this.onFinish()}
                <div className='header'>
                    <p className='title' style={{paddingTop: '30px'}}>Câu hỏi thứ {this.state.countQuestion} / {this.state.questionList.length} </p>
                </div>
                {
                    this.state.showQuestionTitle && 
                    <div className="questionContent">
                        <div>
                            <LinearProgress style={{ height: 20 }} variant="determinate" value={this.state.completed} />
                        </div>
                        <div>
                            {
                                !_.isEmpty(this.state.question) &&
                                <p className='questionText' style={{marginTop: '60px'}}>
                                    {this.state.question.content}
                                </p>
                            }
                        </div>
                    </div>
                }
                {
                    this.state.showQuestionTitle == false &&
                    <div style={{flex: 5, display: 'flex', flexDirection: 'column'}}>
                        <div style={{flex: 1, backgroundColor: '#c2c6ce', alignItems: 'center', position: 'relative', textAlign: 'center'}}>
                        <div style={{margin: 50, display: 'inline-block', position: 'absolute', left: '0px'}}>
                        <ReactCountdownClock 
                            seconds={this.state.question.timeout}
                            color="#000"
                            alpha={0.9}
                            size={100}
                            onComplete={this.onFinish}
                            />
                        </div>
                        { this.state.image && <div style={{display: 'inline-block', marginTop: '10px'}}>
                            <img src={this.state.image} width="490px" ></img>
                        </div>}
                        <div><span style={{fontSize: '40px', fontWeight: 600}}>{this.state.question.content}</span></div>
                        </div>
                        <div style={{flex: 1, display: 'flex', flexWrap: 'wrap'}}>
                        {
                            this.state.question && this.state.question.answerList && this.state.question.answerList.length > 0 &&
                            this.state.question.answerList.map((answer, i) => {
                                return (
                                    <div key={i} className='answerItem' style={{backgroundColor: arrColor[i], width: '300px', height: '45%', margin: 'auto 5px'}}>
                                        <span className='answerText' style={{fontSize: 40}}><img src={arrShape[i]} width="40"></img> {answer.content}</span>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                }
                { !this.state.endUpdate &&
                <div className='bottomTitleWrapper'>
                    <p className='bottomTitleText'></p>
                </div>
                }
            </div>
        )
    }
}

export default withRouter(GetReadyContainer)