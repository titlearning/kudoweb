import React, {Component} from 'react';
import {Button, AppBar, Table} from '@material-ui/core';
import { database } from '../../config/firebase';

class TotalResult extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rank1_name: '',
            rank1_score: 0,
            activities: []
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
                sortPoint.shift()
                this.setState({
                    activities: sortPoint
                })
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

    endRoom = () => {
        this.props.history.push(`/`);
    }

    render() {
        return(
            <div style={{minWidth: '40vw'}}>
               <div color="light" light expand="md" style={{height: '10vh', borderBottom: 'solid 5px #ccc'}}>
                    <div style={{margin: '0 auto', textAlign: 'center'}}>
                        <span style={{fontSize: '30px', fontWeight: 700}}>Xếp hạng kết quả</span> 
                    </div>
               </div>
               <div style={{backgroundColor: '#FF9900', minHeight: '75vh'}}>
                    <div style={{height: '12vh', padding: '2vh'}}>
                        <Button variant="contained" color="primary" style={{float: 'right', height: '40px', fontWeight: 500}} onClick={this.endRoom}>Kết thúc</Button>
                    </div>
                    <div style={{width: '60vw', margin: '0 auto', minHeight: '55vh'}}>
                        <Table borderless style={{}}>
                            <tbody>
                                { this.state.rank1_name !== '' &&
                                    <tr style={style_first_row}>
                                        <td style={{float: 'left'}}>{this.state.rank1_name}</td>
                                        <td style={{float: 'right'}}>{this.state.rank1_score}</td>
                                    </tr>
                                }
                                {
                                    this.state.activities && 
                                    this.state.activities.map((object, i) => 
                                        <tr style={style}>
                                            <td style={{float: 'left'}}>{object.playername}</td>
                                            <td style={{float: 'right'}}>{object.totalpoint}</td>
                                        </tr>)
                                }
                            </tbody>
                        </Table>
                    </div>
                    {/* <div style={{height: '10vh', padding: '2vh'}}>
                        <div style={{float: 'right', height: '10vh'}}>
                            <Button style={{fontSize: '15px', color: 'white', fontWeight: 600}} >Kết thúc</Button>
                        </div>
                    </div> */}
               </div>
               <div style={{backgroundColor: '#660099', height: '15vh'}}>
                    <div style={{margin: '0 auto', width: '40vw', textAlign: 'center'}}>
                        <span style={{lineHeight: '15vh', color: 'white', fontWeight: '500', fontSize: '25px'}}>Từ top 5, Jack đã vượt lên dẫn đầu</span>
                    </div>
               </div>
            </div>
        )
    }
}

export default TotalResult;

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

