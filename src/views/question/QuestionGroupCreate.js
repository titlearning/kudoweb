import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Header from '../../components/question/Header'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

class QuestionGroupCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            isPublic: 1
        };

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDes = this.handleChangeDes.bind(this);
        this.handleChangeType = this.handleChangeType.bind(this);
    }

    handleChangeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    handleChangeDes(e) {
        this.setState({
            description: e.target.value
        })
    }

    handleChangeType = event => {
        this.setState({
            isPublic: event.target.value
        })
    };

    render() {
        return (
            <div>
                <Header head_title="TẠO BỘ CÂU HỎI" {...this.state} />
                <div style={{ marginTop: '20vh', marginLeft: '10vh', marginRight: '10vh', flexGrow: 1 }}>
                    <Grid container spacing={40}>
                        <Grid item xs={12}>
                            <TextField
                                id="question-group-title"
                                // error={true}
                                label="Tiêu đề (Bắt buộc)"
                                margin="normal"
                                value={this.state.title}
                                onChange={this.handleChangeTitle}
                                rowsMax="4"
                                // variant="outlined"
                                fullWidth
                                style={{}}
                            />
                            <TextField
                                id="question-group-title"
                                // error={true}
                                label="Mô tả"
                                margin="normal"
                                value={this.state.description}
                                onChange={this.handleChangeDes}
                                rowsMax="4"
                                // variant="outlined"
                                fullWidth
                                style={{}}
                            />
                        </Grid>
                    </Grid>
                </div>

                <div style={{ marginTop: '5vh', marginLeft: '10vh', marginRight: '10vh', flexGrow: 1 }}>
                    Loại chủ đề
                    <Select
                        value={this.state.isPublic}
                        onChange={this.handleChangeType}
                        style={{ margin: '0vh 0vw 0vh 1vw' }}
                        inputProps={{
                            name: 'time',
                            id: "outlined-simple"
                        }}>
                        <MenuItem value={1}>Public</MenuItem>
                        <MenuItem value={0}>Private</MenuItem>
                    </Select>
                </div>
            </div>
        )
    }
}

export default QuestionGroupCreate;