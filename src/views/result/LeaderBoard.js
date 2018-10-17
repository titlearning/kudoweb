import React, {Component} from 'react';
import {Button, Navbar, Table} from 'reactstrap';

class LeaderBoard extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return(
            <div style={{minWidth: '40vw'}}>
               <Navbar color="light" light expand="md" style={{height: '10vh', borderBottom: 'solid 5px #ccc'}}>
                    <div style={{margin: '0 auto', }}>
                        <span style={{fontSize: '30px'}}>Xếp hạng kết quả</span> 
                    </div>
               </Navbar>
               <div style={{backgroundColor: '#FF9900', height: '75vh'}}>
                    <div style={{height: '10vh', padding: '1vh'}}>
                        <Button color="primary" style={{float: 'right', height: '5vh'}}>Câu hỏi tiếp theo</Button>
                    </div>
                    <div style={{width: '30vw', margin: '0 auto'}}>
                        <Table borderless>
                            <tbody>
                                <tr style={{backgroundColor: '#F5F5F5',  borderBottom: 'solid 3px #DCDCDC'}}>
                                    <td>Ahihi</td>
                                    <td style={{float: 'right'}}>Ahoho</td>
                                </tr>
                                <tr style={style}>
                                    <td>Ahihi</td>
                                    <td style={{float: 'right'}}>Ahoho</td>
                                </tr>
                                <tr style={style}>
                                    <td>Ahihi</td>
                                    <td style={{float: 'right'}}>Ahoho</td>
                                </tr>
                                <tr style={style}>
                                    <td>Ahihi</td>
                                    <td style={{float: 'right'}}>Ahoho</td>
                                </tr>
                                <tr style={style}>
                                    <td>Ahihi</td>
                                    <td style={{float: 'right'}}>Ahoho</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
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

export default LeaderBoard;

/**
 * @type {React.CSSProperties}
 */
var style = {
    borderLeft: 'solid 1px #9C9C9C',
    borderRight: 'solid 1px #9C9C9C',
    borderBottom: 'solid 3px #9C9C9C'
}