import React, {Component} from 'react';
import {Navbar, Nav} from 'reactstrap';
import {database} from '../../config/firebase';

class FinalResult extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rank: 0,
            totalPoint: 0,
            rankText: '',
            contentText: ''
        }
    }

    componentDidMount() {
        var params = this.props.match.params;
        var userid = params.userid;

        // database.ref("/").on('value', (snapshot) => {
        //     var result = snapshot.val();
        //     var listActivities = result.rooms[0].activities;
        //     var rankInfo = result.rank;
            
        //     var sortPoint = listActivities.sort(this.compare);

        //     var userActivityIndex = sortPoint.findIndex( x => x.userid == userid);

        //     this.setState({
        //         rank: userActivityIndex + 1,
        //         totalPoint: sortPoint[userActivityIndex].totalpoint,
        //         rankText: rankInfo.ranktext[userActivityIndex + 1],
        //         contentText: rankInfo.rankcontent[userActivityIndex + 1]
        //     })
        // })
    }

    compare(a,b) {
        if (a.totalpoint < b.totalpoint)
          return 1;
        if (a.totalpoint > b.totalpoint)
          return -1;
        return 0;
    }      

    render() {
        return(
            <div style={{minWidth: '40vw', backgroundColor: '#46178f'}}>
               <Navbar color="#333'" light expand="md" style={{height: '8vh', backgroundColor: '#333'}}>
                    <Nav className="ml-auto" navbar> 
                        <div style={{float: 'right', margin: '5px', fontWeight: 700}}>
                            <div style={{display: 'inline-block', color: 'white'}}>
                                {this.state.rank}
                            </div>
                            <div style={{margin: '0 .625rem', backgroundColor: 'white', height: '30px', display: 'inline-block', color: '#333', minWidth: '5rem', borderRadius: '.1875rem', padding: '0 .75rem', fontSize: '1rem', lineHeight: '1.875', textAlign: 'center'}}>
                                {this.state.totalPoint}
                            </div>
                        </div>
                    </Nav>
               </Navbar>
               <div style={{backgroundColor: '#46178f', height: '92vh'}}>
                    <div style={{height: '20vh'}}>

                    </div>
                    <div style={{height: '40vh', color: 'white', textAlign: 'center', fontWeight: 800, fontSize: '30vh', lineHeight: '40vh'}}>
                       - {this.state.rankText} -
                    </div>
                    <div style={{height: '22vh', color: 'white', textAlign: 'center', fontWeight: 700, fontSize: '10vh', lineHeight: '22vh'}}>
                        {this.state.contentText}
                    </div>
               </div>
            </div>
        )
    }
}

export default FinalResult;