import React, {Component} from 'react';
import {Button, AppBar, Table} from '@material-ui/core';
import { database } from '../../config/firebase';

class LeaderBoard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            question: {},
            rank1_name: '',
            rank2_name: '',
            rank3_name: '',
            rank4_name: '',
            rank5_name: '',
            rank1_score: 0,
            rank2_score: 0,
            rank3_score: 0,
            rank4_score: 0,
            rank5_score: 0,
            activities: {}
        }
    }
    
    componentDidMount() {
        database.ref("/").on('value', (snapshot) => {
            var result = snapshot.val();
            var params = this.props.match.params;
            var roomid = params.roomid;

            var listActivities = {};
            if(result.rooms[roomid].activities) {
                listActivities = result.rooms[roomid].activities;
            }

            var questionList = Object.values(result.rooms[roomid].questionGroup.questionList).map(function (obj) {
                return obj;
            });
            var question = {}
            for (var i = 0; i < questionList.length; i++) {
                if (questionList[i].status == 0) {
                    question = questionList[i];
                    break;
                }
            }
        
            this.setState({
                activities: listActivities,
                question: question
            })

            var sortPoint = Object.values(listActivities).sort(this.compare);
            if(sortPoint[0]) {
                this.setState({
                    rank1_name: sortPoint[0].playername,
                    rank1_score: sortPoint[0].totalpoint
                });
            }
            if(sortPoint[1]) {
                this.setState({
                    rank2_name: sortPoint[1].playername,
                    rank2_score: sortPoint[1].totalpoint
                });
            }
            if(sortPoint[2]) {
                this.setState({
                    rank3_name: sortPoint[2].playername,
                    rank3_score: sortPoint[2].totalpoint
                });
            }
            if(sortPoint[3]) {
                this.setState({
                    rank4_name: sortPoint[3].playername,
                    rank4_score: sortPoint[3].totalpoint
                });
            }
            if(sortPoint[4]) {
                this.setState({
                    rank5_name: sortPoint[4].playername,
                    rank5_score: sortPoint[4].totalpoint
                });
            }
        });
    }

    compare(a,b) {
        if (a.totalpoint < b.totalpoint)
          return 1;
        if (a.totalpoint > b.totalpoint)
          return -1;
        return 0;
    }      

    nextQuestion = () => {
        if(!this.isEmpty(this.state.question)) {
            var activities = this.state.activities;
            var keys = Object.keys(this.state.activities);
            keys.forEach(element => {
                activities[element].answers.push({
                    answer: -1,
                    point: 0,
                    questionId: this.state.question.id,
                    timestart: 0,
                    timesubmit: 0        
                })
            });
            database.ref(`/rooms/${this.props.match.params.roomid}`).update({
                activities: activities
            }); 

            database.ref(`/rooms/${this.props.match.params.roomid}/questionGroup/questionList/${this.state.question.id}`).update({
                status: 3
            })

            this.props.history.push(`/getready/${this.props.match.params.roomid}`);
        } else {
            database.ref(`/rooms/${this.props.match.params.roomid}`).update({
                status: 2
            }); 

            this.props.history.push(`/finalresult/${this.props.match.params.roomid}`);
        }
    }

    isEmpty = (obj) => {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    render() {
        return(
            <div style={{minWidth: '40vw'}}>
               <div color="light" light expand="md" style={{height: '10vh', borderBottom: 'solid 5px #ccc'}}>
                    <div style={{margin: '0 auto', textAlign: 'center'}}>
                        <span style={{fontSize: '30px', fontWeight: 700}}>Xếp hạng kết quả</span> 
                    </div>
               </div>
               <div style={{backgroundColor: '#FF9900', height: '75vh'}}>
                    <div style={{height: '12vh', padding: '2vh'}}>
                        <Button variant="contained" color="primary" style={{float: 'right', height: '40px', fontWeight: 500}} onClick={this.nextQuestion}>Tiếp theo</Button>
                    </div>
                    <div style={{width: '60vw', margin: '0 auto', height: '55vh'}}>
                        <Table borderless style={{}}>
                            <tbody>
                                { this.state.rank1_name !== '' &&
                                    <tr style={style_first_row}>
                                        <td style={{float: 'left'}}>{this.state.rank1_name}</td>
                                        <td style={{float: 'right'}}>{this.state.rank1_score}</td>
                                    </tr>
                                }
                                { this.state.rank2_name !== '' &&
                                    <tr style={style}>
                                        <td style={{float: 'left'}}>{this.state.rank2_name}</td>
                                        <td style={{float: 'right'}}>{this.state.rank2_score}</td>
                                    </tr>
                                }
                                { this.state.rank3_name !== '' &&
                                    <tr style={style}>
                                        <td style={{float: 'left'}}>{this.state.rank3_name}</td>
                                        <td style={{float: 'right'}}>{this.state.rank3_score}</td>
                                    </tr>
                                }
                                { this.state.rank4_name !== '' &&
                                    <tr style={style}>
                                        <td style={{float: 'left'}}>{this.state.rank4_name}</td>
                                        <td style={{float: 'right'}}>{this.state.rank4_score}</td>
                                    </tr>
                                }
                                { this.state.rank5_name !== '' &&
                                    <tr style={style}>
                                        <td style={{float: 'left'}}>{this.state.rank5_name}</td>
                                        <td style={{float: 'right'}}>{this.state.rank5_score}</td>
                                    </tr>
                                }
                            </tbody>
                        </Table>
                    </div>
                    <div style={{height: '10vh', padding: '2vh'}}>
                        <div style={{float: 'right', height: '10vh'}}>
                            <Button style={{fontSize: '15px', color: 'white', fontWeight: 600}} >Kết thúc</Button>
                        </div>
                    </div>
               </div>
               <div style={{backgroundColor: '#660099', height: '15vh'}}>
                    <div style={{margin: '0 auto', width: '40vw', textAlign: 'center'}}>
                        <span style={{lineHeight: '15vh', color: 'white', fontWeight: '500', fontSize: '25px'}}></span>
                    </div>
               </div>
            </div>
        )
    }
}

export default LeaderBoard;

/**
 * @type {React.CSSProperties}
 */
var style = {
    borderLeft: 'solid 1px #EE9A00',
    borderRight: 'solid 1px #EE9A00',
    backgroundColor: '#EE9A00',  
    boxShadow: '0px 3px 3px #CD8500',
    MozBoxShadow: '0px 3px 3px #CD8500',
    WebkitBoxShadow: '0px 3px 3px #CD8500',
    borderBottom: 'solid 3px #CD8500',
    lineHeight: '5vh',
    fontSize: '20px',
    fontWeight: 700,
    color: 'white',
    height: '10vh'
}

/**
 * @type {React.CSSProperties}
 */
var style_first_row = {
    borderLeft: 'solid 1px #F5F5F5',
    borderRight: 'solid 1px #F5F5F5',
    backgroundColor: '#F5F5F5',  
    borderBottom: 'solid 3px #DCDCDC',
    boxShadow: '0px 3px 3px #CD8500',
    MozBoxShadow: '0px 3px 3px #CD8500',
    WebkitBoxShadow: '0px 3px 3px #CD8500',
    lineHeight: '5vh',
    fontSize: '20px',
    fontWeight: 700,
    height: '10vh'
}

