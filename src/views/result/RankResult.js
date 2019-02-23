import React, {Component} from 'react';
// import {Navbar} from 'reactstrap';
import Grid from '@material-ui/core/Grid';
import {database} from '../../config/firebase';
import Button from '@material-ui/core/Button';

class FinalResult extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rank1_name: '',
            rank2_name: '',
            rank3_name: '',
            rank1_score: 0,
            rank2_score: 0,
            rank3_score: 0
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
        })
    }

    compare(a,b) {
        if (a.totalpoint < b.totalpoint)
          return 1;
        if (a.totalpoint > b.totalpoint)
          return -1;
        return 0;
    }      

    endGame = () => {
        this.props.history.push(`/`);
    }

    showResult = () => {
        this.props.history.push(`/totalresult/${this.props.match.params.roomid}`);
    }

    render() {
        return(
            <div style={{minWidth: '40vw', backgroundColor: '#46178f'}}>
               <div color="#333'" light expand="md" style={{height: '15vh', backgroundColor: '#333', textAlign: 'center'}}>
                    <span style={{color: 'white', fontWeight: '700', fontSize: 30, lineHeight: '100%'}}>Xếp hạng kết quả</span>
               </div>
               <div style={{backgroundColor: '#46178f', height: '85vh'}}>
                    <div style={{padding: '5px', float: 'left'}}>
                        <Button variant="contained" color="secondary" style={{fontWeight: 700, height: '100%'}} onClick={this.showResult}>Chi tiết</Button>
                    </div>
                    <div style={{padding: '5px', float: 'right'}}>
                        <Button variant="contained" color="secondary" style={{fontWeight: 700, height: '100%'}} onClick={this.endGame}>Kết thúc</Button>
                    </div>
                    <div style={{height: '65vh', color: 'white', textAlign: 'center', fontWeight: 800, justifyContent: 'center'}}>
                        <Grid container style={{justifyContent: 'center'}}>
                            <Grid item xs={3} style={{margin: '30px'}}>
                            { this.state.rank2_name !== '' &&
                            <div>
                                <div style={{height: '25vh'}}>
                                </div>
                                <div style={{backgroundColor: '#333366', height: '10vh', marginBottom: '5vh', lineHeight: '10vh', fontSize: 40}}>
                                    {this.state.rank2_name}
                                </div>
                                <div style={{backgroundColor: '#9966FF', height: '30vh', lineHeight: '20vh', fontSize: 30}}>
                                    {this.state.rank2_score} POINTS
                                </div>
                            </div>
                            }
                            </Grid>
                            <Grid item xs={3} style={{margin: '30px'}}>
                            { this.state.rank1_name !== '' &&
                            <div>
                                <div style={{height: '15vh'}}>
                                </div>
                                <div style={{backgroundColor: '#333366', height: '10vh', marginBottom: '5vh', lineHeight: '10vh', fontSize: 40}}>
                                    {this.state.rank1_name}
                                </div>
                                <div style={{backgroundColor: '#9966FF', height: '40vh', lineHeight: '20vh', fontSize: 30}}>
                                    {this.state.rank1_score} POINTS
                                </div>
                            </div>
                            }
                            </Grid>
                            <Grid item xs={3} style={{margin: '30px'}}>
                            { this.state.rank3_name !== '' &&
                            <div>
                                <div style={{height: '30vh'}}>
                                </div>
                                <div style={{backgroundColor: '#333366', height: '10vh', marginBottom: '5vh', fontSize: 40}}>
                                    {this.state.rank3_name} 
                                </div>
                                <div style={{backgroundColor: '#9966FF', height: '25vh', lineHeight: '20vh', fontSize: 30}}>
                                    {this.state.rank3_score} POINTS
                                </div>
                            </div>
                            }
                            </Grid>
                        </Grid>
                    </div>
               </div>
            </div>
        )
    }
}

export default FinalResult;