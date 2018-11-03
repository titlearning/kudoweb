import React, { Component } from 'react'
import { withRouter } from 'react-router'
import LinearProgress from '@material-ui/core/LinearProgress';
import { firebaseApp } from '../config/firebase'
import _ from 'lodash';
import ReactCountdownClock from 'react-countdown-clock'
import { Icon } from 'react-icons-kit'
import {ic_check} from 'react-icons-kit/md/ic_check'
import '../styles/getready.css'


const arrColor = ['#f4e842', '#4562a5', '#6b1187', '#cc0623']

class GetReadyContainer extends Component {
    constructor(props) {
        super(props);
        this.itemRef = firebaseApp.database()
        this.state = {
            completed: 0,
            question: {},
            questionList: [],
            showQuestionTitle: true,
        }
    }

    componentWillMount() {
        var roomPin = 1
        this.itemRef.ref('/rooms').on('value', (snapshot) => {
            var data = Object.values(snapshot.val()).map(function (obj) {
                return obj;
            });
            const roomInfo = data.filter(item => item.roomPin === roomPin);
            var questionList = Object.values(roomInfo[0].questionGroup.questionList).map(function (obj) {
                return obj;
            });

            var question = {}

            for (var i = 0; i < questionList.length; i++) {
                if (questionList[i].status == 3) {
                    question = questionList[i]
                }
            }

            this.setState({
                question: question,
                questionList: questionList
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
            this.setState({
                showQuestionTitle: false
            })
        } else {
            const diff = 10;
            this.setState({ completed: Math.min(completed + diff, 100) });
        }
    };

    onFinish = () => {
        this.props.history.push('/gameblock')
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
                        <div style={{flex: 1, backgroundColor: '#c2c6ce', alignItems: 'center'}}>
                        <div style={{margin: 50}}>
                        <ReactCountdownClock 
                            seconds={this.state.question.timeout}
                            color="#000"
                            alpha={0.9}
                            size={100}
                            onComplete={this.onFinish}
                            />
                        </div>
                        </div>
                        <div style={{flex: 1, display: 'flex', flexWrap: 'wrap'}}>
                        {
                            this.state.question.answerList.length > 0 &&
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