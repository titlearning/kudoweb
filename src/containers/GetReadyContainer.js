import React, { Component } from 'react'
import { withRouter } from 'react-router'
import LinearProgress from '@material-ui/core/LinearProgress';
import '../styles/getready.css'

class GetReadyContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: 0,
        }
    }

    componentDidMount() {
        this.timer = setInterval(this.progress, 500);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    progress = () => {
        const { completed } = this.state;
        if (completed === 100) {
            this.props.history.push('/gameblock')
        } else {
            const diff = Math.random() * 10;
            this.setState({ completed: Math.min(completed + diff, 100) });
        }
    };

    render() {
        return (
            <div className='container'>
                <div className='header'>
                    <p className='title'>Question 2 of 2</p>
                </div>
                <div>
                    <LinearProgress style={{height: 20}} variant="determinate" value={this.state.completed} />
                </div>
                <div className="questionContent">
                    <p className='questionText'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                </div>
                <div className='bottomTitleWrapper'>
                    <p className='bottomTitleText'>Final question! Think hard - you could win up to 1,000 points!</p>
                </div>
            </div>
        )
    }
}

export default withRouter(GetReadyContainer)