import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import { database } from '../../config/firebase'

class Header extends Component {
    constructor(props) {
        super(props);

        this.createQuestion = this.createQuestion.bind(this);
    }

    createQuestion() {
        if(this.props.head_title == "TẠO CÂU HỎI") {
            var postData = {
                
            }
        }
    }

    render() {
        return (
            <AppBar absolute='fixed' style={{flexGrow: 1, backgroundColor: '#333'}}>
                <Toolbar>
                    <Button color="inherit" aria-label="Menu">
                        <Icon>close</Icon>
                        Đóng
                    </Button>
                    <Typography variant="h6" color="inherit" style={{ flexGrow: 1, textAlign: 'center'}}>
                        {this.props.head_title}
                    </Typography>
                    <Button variant="contained" color='secondary' onClick={this.createQuestion}>Thêm câu hỏi</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header; 