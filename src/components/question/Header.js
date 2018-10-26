import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

class Header extends Component {
    constructor(props) {
        super(props);
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
                        {this.props.title}
                    </Typography>
                    <Button variant="contained" color='secondary'>Tiếp theo</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

const bootstrapRoot = {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  };


export default Header; 