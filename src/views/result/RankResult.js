import React, { Component } from 'react';
// import {Navbar} from 'reactstrap';
import Grid from '@material-ui/core/Grid';
import { database } from '../../config/firebase';
import Button from '@material-ui/core/Button';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

class FinalResult extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rank1_name: '',
            rank2_name: '',
            rank3_name: '',
            rank1_score: 0,
            rank2_score: 0,
            rank3_score: 0,
            userRank: []
        }
    }

    componentDidMount() {
        database.ref("/").on('value', (snapshot) => {
            var result = snapshot.val();
            var params = this.props.match.params;
            var roomid = params.roomid;

            var listActivities = {};
            if (result.rooms[roomid].activities) {
                listActivities = result.rooms[roomid].activities;
            }

            var sortPoint = Object.values(listActivities).sort(this.compare);
            this.setState({
                userRank: sortPoint
            });
            if (sortPoint[0]) {
                this.setState({
                    rank1_name: sortPoint[0].playername,
                    rank1_score: sortPoint[0].totalpoint
                });
            }
            if (sortPoint[1]) {
                this.setState({
                    rank2_name: sortPoint[1].playername,
                    rank2_score: sortPoint[1].totalpoint
                });
            }
            if (sortPoint[2]) {
                this.setState({
                    rank3_name: sortPoint[2].playername,
                    rank3_score: sortPoint[2].totalpoint
                });
            }
        })
    }

    compare(a, b) {
        if (a.totalpoint < b.totalpoint)
            return 1;
        if (a.totalpoint > b.totalpoint)
            return -1;
        return 0;
    }

    endGame = () => {
        this.props.history.push(`/`);
    }

    showResult = () => {
        this.props.history.push(`/totalresult/${this.props.match.params.roomid}`);
    }

    render() {
        return (
            <div style={{ minWidth: '40vw', backgroundColor: '#46178f' }}>
                <div color="#333'" light expand="md" style={{ height: '15vh', backgroundColor: '#333', textAlign: 'center' }}>
                    <span style={{ color: 'white', fontWeight: '700', fontSize: 30, lineHeight: '100%' }}>Xếp hạng kết quả</span>
                </div>
                <div style={{ backgroundColor: '#46178f', height: '85vh' }}>
                    <div style={{ padding: '5px', float: 'left' }}>
                        <Button variant="contained" color="secondary" style={{ fontWeight: 700, height: '100%' }} onClick={this.showResult}>Chi tiết</Button>
                    </div>
                    <div style={{ padding: '5px', float: 'right' }}>
                        <Button variant="contained" color="secondary" style={{ fontWeight: 700, height: '100%' }} onClick={this.endGame}>Kết thúc</Button>
                    </div>
                    <div style={{ height: '65vh', color: 'white', textAlign: 'center', fontWeight: 800, justifyContent: 'center' }}>
                        <Grid container style={{ justifyContent: 'center' }}>
                            <table id="table-to-xls" style={{display: 'none'}}>
                                <tbody >
                                    <tr>
                                        <td colSpan={6} style={{paddingRight: '5vh', paddingLeft: '5vh'}}>
                                            <div>
                                                <p style={{textAlign: 'center', margin: '0vh'}}>
                                                    BỘ CÔNG THƯƠNG
                                                    <br />
                                                    TRƯỜNG ĐẠI HỌC CÔNG NGHIỆP HÀ NỘI
                                                </p>
                                            </div>
                                        </td>
                                        <td colSpan={6} style={{paddingRight: '5vh', paddingLeft: '5vh'}}>
                                            <div>
                                                <p style={{textAlign: 'center', margin: '0vh'}}>
                                                    CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
                                                    <br />
                                                    Độc lập - Tự do - Hạnh phúc
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={12} style={{paddingRight: '5vh', paddingLeft: '5vh'}}>
                                            <div>
                                                <br />
                                                <h2 style={{ textAlign:'center'}}>BẢNG KẾT QUẢ THI</h2>
                                                <br />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={6} style={{paddingRight: '5vh', paddingLeft: '5vh'}}>
                                            <div>
                                                <p style={{textAlign: 'left', margin: '0vh'}}>
                                                    Môn thi: Đồ án tốt nghiệp
                                                    <br />
                                                    Hệ: Đại học
                                                </p>
                                            </div>
                                        </td>
                                        <td colSpan={6} style={{paddingRight: '5vh', paddingLeft: '5vh'}}>
                                            <div>
                                                <p style={{textAlign: 'left', margin: '0vh'}}>
                                                    Ngày thi: ...........................................
                                                    <br />
                                                    Khóa: 10
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={1} rowspan={2} style={{paddingRight: '2vh', paddingLeft: '2vh', paddingBottom: '1vh', paddingTop: '1vh', border: '1px solid black', textAlign: 'center'}}>STT</td>
                                        <td colSpan={2} rowspan={2} style={{paddingRight: '2vh', paddingLeft: '2vh', paddingBottom: '1vh', paddingTop: '1vh', border: '1px solid black', textAlign: 'center'}}>Mã SV</td>
                                        <td colSpan={3} rowspan={2} style={{paddingRight: '2vh', paddingLeft: '2vh', paddingBottom: '1vh', paddingTop: '1vh', border: '1px solid black', textAlign: 'center'}}>Họ Tên</td>
                                        <td colSpan={2} style={{paddingRight: '2vh', paddingLeft: '2vh', paddingBottom: '1vh', paddingTop: '1vh', border: '1px solid black', textAlign: 'center'}}>Tổng điểm(thang 10)</td>
                                        <td colSpan={2} rowspan={2} style={{paddingRight: '2vh', paddingLeft: '2vh', paddingBottom: '1vh', paddingTop: '1vh', border: '1px solid black', textAlign: 'center'}}>Ký tên</td>
                                        <td colSpan={2} rowspan={2} style={{paddingRight: '2vh', paddingLeft: '2vh', paddingBottom: '1vh', paddingTop: '1vh', border: '1px solid black', textAlign: 'center'}}>Ghi chú</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={1} style={{paddingRight: '2vh', paddingLeft: '5vh', paddingBottom: '1vh', paddingTop: '1vh', border: '1px solid black', textAlign: 'center'}}>Bằng số</td>
                                        <td colSpan={1} style={{paddingRight: '2vh', paddingLeft: '5vh', paddingBottom: '1vh', paddingTop: '1vh', border: '1px solid black', textAlign: 'center'}}>Bằng chữ</td>
                                    </tr>
                                    {/* loop */}
                                    {
                                        this.state.userRank &&
                                        this.state.userRank.map((object, i) =>
                                            <tr>
                                                <td colSpan={1} style={{ paddingRight: '2vh', paddingLeft: '2vh', paddingBottom: '1vh', paddingTop: '1vh', border: '1px solid black', textAlign: 'center' }}>{i+1}</td>
                                                <td colSpan={2} style={{ paddingRight: '2vh', paddingLeft: '2vh', paddingBottom: '1vh', paddingTop: '1vh', border: '1px solid black', textAlign: 'left' }}>{object.playername.slice(0,10)}</td>
                                                <td colSpan={3} style={{ paddingRight: '2vh', paddingLeft: '2vh', paddingBottom: '1vh', paddingTop: '1vh', border: '1px solid black', textAlign: 'left' }}>{object.playername.slice(0,10)}</td>
                                                <td colSpan={1} style={{ paddingRight: '2vh', paddingLeft: '2vh', paddingBottom: '1vh', paddingTop: '1vh', border: '1px solid black', textAlign: 'left' }}>{object.totalpoint}</td>
                                                <td colSpan={1} style={{ paddingRight: '2vh', paddingLeft: '2vh', paddingBottom: '1vh', paddingTop: '1vh', border: '1px solid black', textAlign: 'left' }}>{object.totalpoint}</td>
                                                <td colSpan={2} style={{ paddingRight: '2vh', paddingLeft: '2vh', paddingBottom: '1vh', paddingTop: '1vh', border: '1px solid black', textAlign: 'left' }}></td>
                                                <td colSpan={2} style={{ paddingRight: '2vh', paddingLeft: '2vh', paddingBottom: '1vh', paddingTop: '1vh', border: '1px solid black', textAlign: 'left' }}></td>
                                            </tr>)
                                    }
                                    {/* end loop */}
                                    <tr>
                                        <td colSpan={6} rowspan={2} style={{paddingRight: '5vh', paddingLeft: '5vh'}}>
                                            <div>
                                                <br />
                                                <br />
                                                <p style={{textAlign: 'center', margin: '0vh'}}>Cán bộ chấm thi thứ nhất</p>
                                                <br />
                                                <br />
                                            </div>
                                        </td>
                                        <td colSpan={6} rowspan={2} style={{paddingRight: '5vh', paddingLeft: '5vh'}}>
                                            <div>
                                                <br />
                                                <br />
                                                <p style={{textAlign: 'center', margin: '0vh'}}>Cán bộ chấm thi thứ hai</p>
                                                <br />
                                                <br />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={6} style={{paddingRight: '5vh', paddingLeft: '5vh'}}>
                                            <div>
                                            </div>
                                        </td>
                                        <td colSpan={6} style={{paddingRight: '5vh', paddingLeft: '5vh'}}>
                                            <div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <Grid item xs={3} style={{ margin: '30px' }}>
                                {this.state.rank2_name !== '' &&
                                    <div>
                                        <div style={{ height: '25vh' }}>
                                        </div>
                                        <div style={{ backgroundColor: '#333366', height: '10vh', marginBottom: '5vh', lineHeight: '10vh', fontSize: 40 }}>
                                            {this.state.rank2_name}
                                        </div>
                                        <div style={{ backgroundColor: '#9966FF', height: '30vh', lineHeight: '20vh', fontSize: 30 }}>
                                            {this.state.rank2_score} POINTS
                                </div>
                                    </div>
                                }
                            </Grid>
                            <Grid item xs={3} style={{ margin: '30px' }}>
                                {this.state.rank1_name !== '' &&
                                    <div>
                                        <div style={{ height: '15vh' }}>
                                        </div>
                                        <div style={{ backgroundColor: '#333366', height: '10vh', marginBottom: '5vh', lineHeight: '10vh', fontSize: 40 }}>
                                            {this.state.rank1_name}
                                        </div>
                                        <div style={{ backgroundColor: '#9966FF', height: '40vh', lineHeight: '20vh', fontSize: 30 }}>
                                            {this.state.rank1_score} POINTS
                                </div>
                                    </div>
                                }
                            </Grid>
                            <Grid item xs={3} style={{ margin: '30px' }}>
                                {this.state.rank3_name !== '' &&
                                    <div>
                                        <div style={{ height: '30vh' }}>
                                        </div>
                                        <div style={{ backgroundColor: '#333366', height: '10vh', marginBottom: '5vh', fontSize: 40 }}>
                                            {this.state.rank3_name}
                                        </div>
                                        <div style={{ backgroundColor: '#9966FF', height: '25vh', lineHeight: '20vh', fontSize: 30 }}>
                                            {this.state.rank3_score} POINTS
                                </div>
                                    </div>
                                }
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div color="#333'" light expand="md" style={{ height: '5vh', textAlign: 'right' }}>
                    <ReactHTMLTableToExcel
                        id="test-table-xls-button"
                        className="download-table-xls-button"
                        table="table-to-xls"
                        filename="kudo"
                        sheet="sheet 1"
                        buttonText="Download as XLS" />
                </div>

            </div>
        )
    }
}

export default FinalResult;