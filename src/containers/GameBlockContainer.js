import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { firebaseApp } from '../config/firebase'
import _ from 'lodash';
import { Icon } from 'react-icons-kit'
import {ic_check} from 'react-icons-kit/md/ic_check'
import {ic_close} from 'react-icons-kit/md/ic_close'
import '../styles/gameblock.css'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import rhomb from '../images/rhomb.png';
import circle from '../images/circle.png';
import triangle from '../images/triangle.png';
import square from '../images/square.png';


const arrColor = ['#ff365b', '#46a1e7', '#ffbf0a', '#67be3c']
const arrShape = [triangle, rhomb, circle, square]

class GameBlockContainer extends Component {
    constructor(props) {
        super(props);
        this.itemRef = firebaseApp.database()
        this.state = {
            question: {},
            activities: [],
            no_answers: [0, 0, 0, 0]
        }
    }

    componentDidMount() {
        this.itemRef.ref(`/rooms/${this.props.match.params.id}`).on('value', (snapshot) => {
            var $this = this;

            const roomInfo = snapshot.val();
            var questionList = Object.values(roomInfo.questionGroup.questionList).map(function (obj) {
                return obj;
            });
            var activities = roomInfo.activities;

            var list_answer_question = [];
            if(activities) {
                list_answer_question = Object.values(activities).map(function(obj) {
                    var answers = obj.answers;
                    
                    return answers.find(function(element) {
                        return element.questionId == $this.props.match.params.questionid;
                    })
                })
            } 

            var no_answers = [0, 0, 0, 0];
            list_answer_question.forEach(element => {
                no_answers[element.answer-1] ++;
            });
        
            this.setState({
                questionList: questionList,
                activities: activities,
                no_answers: no_answers
            })
        })

        this.itemRef.ref(`/rooms/${this.props.match.params.id}/questionGroup/questionList/${this.props.match.params.questionid}`).on('value', (snapshot) => {
            var question = snapshot.val();

            this.setState({
                question: question
            })
        })

    }

    showLeaderboard = () => {
        this.props.history.push(`/leaderboard/${this.props.match.params.id}`);
    }

    render() {
        return (
            <div className='container' style={{overflow: 'hidden'}}>
                <div className='header'>
                    <p className='title' style={{paddingTop: '30px'}}>{this.state.question.content}</p>
                </div>
                <div className="content">
                    <Button variant="contained" color="secondary" onClick={this.showLeaderboard} style={{float: 'right', height: '40px', margin: '10px'}}><p style={{fontWeight: 700}}>Xếp hạng</p></Button>
                    <div className="statistic-answers">
                        <Grid container style={{textAlign: 'center', padding: '10px'}}>
                            <Grid item xs={8} spacing={24} style={{margin: '0 auto'}}>
                            {
                            !_.isEmpty(this.state.question) &&
                            this.state.question.answerList.length > 0 &&
                            this.state.question.answerList.map((answer, i) => {
                                return(
                                <div style={{width: '25%', display: 'inline-block', paddingLeft: '60px', paddingRight: '60px'}}>
                                    <div><span style={{color: arrColor[i], fontSize: '40px', fontWeight: 600}}>{ answer.position == this.state.question.rightAnswer ? <Icon icon={ic_check} size="40px"></Icon> : <Icon icon={ic_close} size="40px"></Icon>} {this.state.no_answers[i]}</span></div>
                                    <div style={{width: '100%', height: '3px', backgroundColor: arrColor[i], margin: '5px' }}></div>
                                    <div style={{width: '100%', height: '50px', backgroundColor: arrColor[i], margin: '5px', paddingTop: '10px'}}>
                                        <img src={arrShape[i]} width='30px'></img>
                                    </div>
                                </div> )
                            })}
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="answer">
                    {
                        !_.isEmpty(this.state.question) &&
                        this.state.question.answerList.length > 0 &&
                        this.state.question.answerList.map((answer, i) => {
                            return(
                                <div key={i} className='answerItem' style={{backgroundColor: arrColor[i], opacity: answer.position == this.state.question.rightAnswer ? 1 : 0.5}}>
                                    <p className='answerText' style={{fontSize: 50}}>
                                        <img src={arrShape[i]} width="50"></img> {answer.content}
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