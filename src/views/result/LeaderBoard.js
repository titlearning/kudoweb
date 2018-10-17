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
                    <div style={{height: '10vh', padding: '2vh'}}>
                        <Button color="primary" style={{float: 'right', height: '40px'}}>Câu hỏi tiếp theo</Button>
                    </div>
                    <div style={{width: '60vw', margin: '0 auto', height: '55vh'}}>
                        <Table borderless style={{height: '55vh'}}>
                            <tbody>
                                <tr style={style_first_row}>
                                    <td style={{float: 'left'}}>Ahihi</td>
                                    <td style={{float: 'right'}}>Ahoho</td>
                                </tr>
                                <tr style={style}>
                                    <td style={{float: 'left'}}>Ahihi</td>
                                    <td style={{float: 'right'}}>Ahoho</td>
                                </tr>
                                <tr style={style}>
                                    <td style={{float: 'left'}}>Ahihi</td>
                                    <td style={{float: 'right'}}>Ahoho</td>
                                </tr>
                                <tr style={style}>
                                    <td style={{float: 'left'}}>Ahihi</td>
                                    <td style={{float: 'right'}}>Ahoho</td>
                                </tr>
                                <tr style={style}>
                                    <td style={{float: 'left'}}>Ahihi</td>
                                    <td style={{float: 'right'}}>Ahoho</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div style={{height: '10vh', padding: '2vh'}}>
                        <div style={{float: 'right', height: '10vh'}}>
                            <a href="/" style={{fontSize: '15px', color: 'white', fontWeight: 600}} >Kết thúc</a>
                        </div>
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
    color: 'white'
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
    fontWeight: 700
}

