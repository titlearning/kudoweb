import React, { Component } from 'react'
import { withRouter } from 'react-router'
import LinearProgress from '@material-ui/core/LinearProgress';
import { firebaseApp } from '../config/firebase'
import _ from 'lodash';
import ReactCountdownClock from 'react-countdown-clock'
import { Icon } from 'react-icons-kit'
import {ic_check} from 'react-icons-kit/md/ic_check'
import '../styles/getready.css';
import { Redirect } from 'react-router-dom';


const arrColor = ['#f4e842', '#4562a5', '#6b1187', '#cc0623']

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
            timeStart: Date.now(),
            endUpdate: false
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
                if (questionList[i].status == 3 || questionList[i].status == 1) {
                    question = questionList[i];
                    break;
                }
            }
            var activities = {};
            if(roomInfo.activities) {
                activities = roomInfo.activities
            }

            if(question.id) {
                this.storageRef.ref(`/question/images/${roomInfo.questionGroupId}/${question.id}.jpg`)
            }

            this.setState({
                question: question,
                questionList: questionList,
                activities: activities
            })
        })
    }

    componentDidMount() {
        this.timer = setInterval(this.progress, 500);
        const timeout = this.state.question.timeout
        console.log('-------------------time', timeout)
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    progress = () => {
        const { completed } = this.state;
        
        if (completed === 100) {
            if(!this.state.endUpdate) {
                var keys = Object.keys(this.state.activities);
                keys.forEach(element => {
                    var answers = this.state.activities[element].answers.map((ansObj, i) =>{
                        if(ansObj.timestart == 0) {
                            var newAns = {
                                answer: -1,
                                point: 0,
                                questionId: this.state.question.id,
                                timestart: this.state.timeStart,
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
        keys.forEach(element => {
            var obj = activities[element];
            var totalPoint = obj.totalpoint;
            var answers = obj.answers.map((ansObj, index) => {
                if(ansObj.questionId == questionOnNow.id) {
                    var point = 0;
                    if(ansObj.answer == questionOnNow.rightAnswer) {
                        var timeAnswer = ansObj.timesubmit - ansObj.timestart;
                        if(questionOnNow.timeout > (timeAnswer / 1000) && timeAnswer > 0) {
                            point = Math.round((questionOnNow.timeout * 1000 - timeAnswer)/100);
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

            activities[element].totalpoint = totalPoint;
            activities[element].answers = answers;
        });

        this.itemRef.ref(`/rooms/${this.props.match.params.id}`).update({
            activities: activities
        }); 
    }

    render() {
        return (
            <div className='container'>
                <div className='header'>
                    <p className='title'>Question 1 of {this.state.questionList.length} </p>
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
                                <p className='questionText'>
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
                        <div style={{display: 'inline-block'}}>
                            <img src="https://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg" width="500px" ></img>
                        </div>
                        </div>
                        <div style={{flex: 1, display: 'flex', flexWrap: 'wrap'}}>
                        {
                            this.state.question && this.state.question.answerList && this.state.question.answerList.length > 0 &&
                            this.state.question.answerList.map((answer, i) => {
                                return (
                                    <div key={i} className='answerItem' style={{backgroundColor: arrColor[i], width: '300px', height: '45%', margin: 'auto'}}>
                                        <span className='answerText'>{answer.content}</span>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                //     <div className="questionContent">
                //         <ReactCountdownClock seconds={1000}
                //             color="#000"
                //             alpha={0.9}
                //             size={100}
                //             onComplete={this.onFinish} />
                //     <div className="answer" style={{flex: 1}}>
                //         {
                //             this.state.question.answerList.length > 0 &&
                //             this.state.question.answerList.map((answer, i) => {
                //                 return (
                //                     <div key={i} className='answerItem' style={{backgroundColor: arrColor[i], height: '30vh'}}>
                //                         <span className='answerText'>{answer.content}</span>
                //                     </div>
                //                 )
                //             })
                //         }
                //     </div>
                // </div>
                }

                <div className='bottomTitleWrapper'>
                    <p className='bottomTitleText'>Final question! Think hard - you could win up to 1,000 points!</p>
                </div>
            </div>
        )
    }
}

export default withRouter(GetReadyContainer)