import React, {Component} from 'react';
import {Navbar, Nav} from 'reactstrap';

class FinalResult extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div style={{minWidth: '40vw', backgroundColor: '#46178f'}}>
               <Navbar color="#333'" light expand="md" style={{height: '8vh', backgroundColor: '#333'}}>
                    <Nav className="ml-auto" navbar> 
                        <div style={{float: 'right', margin: '5px', fontWeight: 700}}>
                            <div style={{display: 'inline-block', color: 'white'}}>
                                1
                            </div>
                            <div style={{margin: '0 .625rem', backgroundColor: 'white', height: '30px', display: 'inline-block', color: '#333', minWidth: '5rem', borderRadius: '.1875rem', padding: '0 .75rem', fontSize: '1rem', lineHeight: '1.875', textAlign: 'center'}}>
                                1234
                            </div>
                        </div>
                    </Nav>
               </Navbar>
               <div style={{backgroundColor: '#46178f', height: '92vh'}}>
                    
               </div>
            </div>
        )
    }
}

export default FinalResult;