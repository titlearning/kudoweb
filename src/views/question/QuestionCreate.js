import React, {Component} from 'react';
import ReactDOM from "react-dom";
import TextField from '@material-ui/core/TextField';
import Header from '../../components/question/Header';
import InputImage from '../../components/question/InputImage';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Tooltip from '@material-ui/core/Tooltip';

class QuestionCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            time: 20,
            labelWidth: 0,
            answer1: '',
            answer2: '',
            answer3: '',
            answer4: '',
            key1: false,
            key2: false,
            key3: false,
            key4: false,
            description: ''
        };

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeAns1 = this.handleChangeAns1.bind(this);
        this.handleChangeAns2 = this.handleChangeAns2.bind(this);
        this.handleChangeAns3 = this.handleChangeAns3.bind(this);
        this.handleChangeAns4 = this.handleChangeAns4.bind(this);
        this.handleChangeDes = this.handleChangeDes.bind(this);
        this.handleChangeKey = this.handleChangeKey.bind(this);
    }

    componentDidMount() {
        // this.setState({
        //     labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
        // });
    }
    
    handleChangeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    handleChangeTime = event => {
        this.setState({
            time: event.target.value
        })
    };

    handleChangeAns1(e) {
        this.setState({
            answer1: e.target.value
        })
    }

    handleChangeAns2(e) {
        this.setState({
            answer2: e.target.value
        })
    }

    handleChangeAns3(e) {
        this.setState({
            answer3: e.target.value
        })
    }

    handleChangeAns4(e) {
        this.setState({
            answer4: e.target.value
        })
    }

    handleChangeDes(e) {
        this.setState({
            description: e.target.value
        })
    }

    handleChangeKey(e) {
        var key = e.target.value;
       
        this.setState({
            key1: false,
            key2: false,
            key3: false,
            key4: false
        })

        switch (parseInt(key)) {
            case 1:
                this.setState({
                    key1: true
                })
                break;
            case 2:
                this.setState({
                    key2: true
                })
                break;
            case 3:
                this.setState({
                    key3: true
                })
                break;
            case 4:
                this.setState({
                    key4: true
                })
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div style={{overflowX: "hidden"}}>
                <Header head_title="TẠO CÂU HỎI" {...this.state} />
                <div style={{marginTop: '20vh', marginLeft: '2vh', marginRight: '2vh', flexGrow: 1}}>
                    <Grid container spacing={40}>
                        <Grid item xs={6}>
                            <TextField
                                id="question-group-title"
                                // error={true}
                                label="Nội dung câu hỏi (Bắt buộc)"
                                margin="normal"
                                value = {this.state.title}
                                onChange = {this.handleChangeTitle}
                                rowsMax="4"
                                // variant="outlined"
                                fullWidth
                                style={{}}
                                />
                            <Grid item xs={6} style={{marginTop: '3vh'}}>                         
                                <FormControl variant="outlined" style={{width: '100%'}}>
                                    <InputLabel
                                        // ref={ref => {
                                        // this.InputLabelRef = ref;
                                        // }}
                                        htmlFor="outlined-simple"
                                    >
                                        Thời gian
                                    </InputLabel>
                                    <Select
                                        value={this.state.time}
                                        onChange={this.handleChangeTime}
                                        inputProps={{
                                            name: 'time',
                                            id: "outlined-simple"
                                        }
                                        // <OutlinedInput
                                        //     labelWidth={this.state.labelWidth}
                                        //     name="age"
                                        //     id="outlined-age-simple"
                                        // />
                                        }
                                    >
                                        <MenuItem value={20}>20 giây</MenuItem>
                                        <MenuItem value={30}>30 giây</MenuItem>
                                        <MenuItem value={60}>60 giây</MenuItem>
                                        <MenuItem value={90}>90 giây</MenuItem>
                                        <MenuItem value={120}>120 giây</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                             <InputImage />   
                        </Grid>
                    </Grid>
                </div>
                <div style={{marginTop: '5vh', marginLeft: '2vh', marginRight: '2vh', flexGrow: 1}}>
                    <Grid container spacing={24}>
                        <Grid item xs={6}>
                            <TextField
                                id="question-group-title"
                                value={this.state.answer1}
                                onChange={this.handleChangeAns1}
                                label="Đáp án 1 (Bắt buộc)"
                                margin="normal"
                                rowsMax="4"
                                // variant="outlined"
                                style={{width: '85%'}}
                                />
                            <Tooltip title="Chọn đáp án đúng" placement="right">    
                                <Checkbox
                                    style={{}}
                                    onChange={this.handleChangeKey}
                                    value={1}
                                    checked={this.state.key1}
                                    icon={<CheckBoxOutlineBlankIcon style={{ fontSize: 60 }} />}
                                    checkedIcon={<CheckBoxIcon style={{ fontSize: 60 }} />}
                                />
                            </Tooltip>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="question-group-title"
                                value={this.state.answer2}
                                onChange={this.handleChangeAns2}
                                label="Đáp án 2 (Bắt buộc)"
                                margin="normal"
                                rowsMax="4"
                                // variant="outlined"
                                fullWidth
                                style={{width: '85%'}}
                                />
                            <Tooltip title="Chọn đáp án đúng" placement="right">    
                                <Checkbox
                                    style={{}}
                                    onChange={this.handleChangeKey}
                                    value={2}
                                    checked={this.state.key2}
                                    icon={<CheckBoxOutlineBlankIcon style={{ fontSize: 60 }} />}
                                    checkedIcon={<CheckBoxIcon style={{ fontSize: 60 }} />}
                                />
                            </Tooltip>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="question-group-title"
                                value={this.state.answer3}
                                onChange={this.handleChangeAns3}
                                label="Đáp án 3 (Bắt buộc)"
                                margin="normal"
                                rowsMax="4"
                                // variant="outlined"
                                fullWidth
                                style={{width: '85%'}}
                                />
                            <Tooltip title="Chọn đáp án đúng" placement="right">    
                                <Checkbox
                                    style={{}}
                                    onChange={this.handleChangeKey}
                                    value={3}
                                    checked={this.state.key3}
                                    icon={<CheckBoxOutlineBlankIcon style={{ fontSize: 60 }} />}
                                    checkedIcon={<CheckBoxIcon style={{ fontSize: 60 }} />}
                                />
                            </Tooltip>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="question-group-title"
                                value={this.state.answer4}
                                onChange={this.handleChangeAns4}
                                label="Đáp án 4 (Bắt buộc)"
                                margin="normal"
                                rowsMax="4"
                                // variant="outlined"
                                fullWidth
                                style={{width: '85%'}}
                                />
                            <Tooltip title="Chọn đáp án đúng" placement="right">    
                                <Checkbox
                                    style={{}}
                                    onChange={this.handleChangeKey}
                                    value={4}
                                    checked={this.state.key4}
                                    icon={<CheckBoxOutlineBlankIcon style={{ fontSize: 60 }} />}
                                    checkedIcon={<CheckBoxIcon style={{ fontSize: 60 }} />}
                                />
                            </Tooltip>
                        </Grid>
                    </Grid>                         
                </div>
                <div style={{marginTop: '5vh', marginLeft: '2vh', marginRight: '2vh', flexGrow: 1}}>
                    <TextField
                        id="question-group-title"
                        value={this.state.description}
                        onChange={this.handleChangeDes}
                        label="Ghi chú"
                        margin="normal"
                        rows="4"
                        rowsMax="4"
                        // variant="outlined"
                        fullWidth
                        style={{}}
                        />
                </div>
            </div>
        )
    }
}

export default QuestionCreate;