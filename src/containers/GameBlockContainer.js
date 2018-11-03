import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { firebaseApp } from '../config/firebase'
import _ from 'lodash';
import { Icon } from 'react-icons-kit'
import {ic_check} from 'react-icons-kit/md/ic_check'
import {ic_close} from 'react-icons-kit/md/ic_close'
import '../styles/gameblock.css'

class GameBlockContainer extends Component {
    constructor(props) {
        super(props);
        this.itemRef = firebaseApp.database()
        this.state = {
            question: {}
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
                if(questionList[i].id == 1) {
                    question = questionList[i]
                }
            }

            console.log('----------------quesonlist', question)

            this.setState({
                question: question,
                questionList: questionList
            })
        })
    }

    render() {
        return (
            <div className='container'>
                <div className='header'>
                    <p className='title'>{this.state.question.content}</p>
                </div>
                <div className="content">
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