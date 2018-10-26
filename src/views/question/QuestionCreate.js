import React, {Component} from 'react';
import ReactDOM from "react-dom";
import TextField from '@material-ui/core/TextField';
import Header from '../../components/question/Header';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';

class QuestionCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            age: "",
            name: "hai",
            labelWidth: 0
        };
    }

    componentDidMount() {
        this.setState({
          labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
        });
      }
    
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Header title="Tạo câu hỏi" />
                <div style={{marginTop: '20vh', marginLeft: '2vh', marginRight: '2vh', flexGrow: 1}}>
                    <Grid container spacing={40}>
                        <Grid item xs={6}>
                            <TextField
                                id="question-group-title"
                                label="Nội dung câu hỏi (Bắt buộc)"
                                margin="normal"
                                rowsMax="4"
                                variant="outlined"
                                fullWidth
                                style={{}}
                                />
                            <Grid item xs={6} style={{marginTop: '3vh'}}>                         
                                <FormControl variant="outlined" style={{width: '100%'}}>
                                    <InputLabel
                                        ref={ref => {
                                        this.InputLabelRef = ref;
                                        }}
                                        htmlFor="outlined-age-simple"
                                    >
                                        Thời gian
                                    </InputLabel>
                                    <Select
                                        value={this.state.age}
                                        onChange={this.handleChange}
                                        input={
                                        <OutlinedInput
                                            labelWidth={this.state.labelWidth}
                                            name="age"
                                            id="outlined-age-simple"
                                        />
                                        }
                                    >
                                        <MenuItem value={20}>20 sec</MenuItem>
                                        <MenuItem value={30}>30 sec</MenuItem>
                                        <MenuItem value={60}>60 sec</MenuItem>
                                        <MenuItem value={90}>90 sec</MenuItem>
                                        <MenuItem value={120}>120 sec</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            
                        </Grid>
                    </Grid>
                </div>
                <div style={{marginTop: '5vh', marginLeft: '2vh', marginRight: '2vh', flexGrow: 1}}>
                    <Grid container spacing={40}>
                        <Grid item xs={3}>
                            <TextField
                                id="question-group-title"
                                label="Đáp án 1 (Bắt buộc)"
                                margin="normal"
                                rowsMax="4"
                                variant="outlined"
                                fullWidth
                                style={{}}
                                />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                id="question-group-title"
                                label="Đáp án 2 (Bắt buộc)"
                                margin="normal"
                                rowsMax="4"
                                variant="outlined"
                                fullWidth
                                style={{}}
                                />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                id="question-group-title"
                                label="Đáp án 3 (Bắt buộc)"
                                margin="normal"
                                rowsMax="4"
                                variant="outlined"
                                fullWidth
                                style={{}}
                                />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                id="question-group-title"
                                label="Đáp án 4 (Bắt buộc)"
                                margin="normal"
                                rowsMax="4"
                                variant="outlined"
                                fullWidth
                                style={{}}
                                />
                        </Grid>
                    </Grid>                         
                </div>
                <div style={{marginTop: '5vh', marginLeft: '2vh', marginRight: '2vh', flexGrow: 1}}>
                    <TextField
                        id="question-group-title"
                        label="Ghi chú"
                        margin="normal"
                        rows="4"
                        rowsMax="4"
                        variant="outlined"
                        fullWidth
                        style={{}}
                        />
                </div>
            </div>
        )
    }
}

export default QuestionCreate;