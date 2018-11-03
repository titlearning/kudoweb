import React, {Component} from 'react' 
import ReactDOM from "react-dom";
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Image from '@material-ui/icons/Image';

class InputImage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        file: ''
      };
      this.inputImage = React.createRef();
      this.handleImageChange = this.handleImageChange.bind(this);
    }
  
    handleClick = () => {
      this.inputImage.current.click();
    }

    handleImageChange(e) {
      e.preventDefault();
  
      this.setState({
        file: URL.createObjectURL(e.target.files[0])
      })
    }
  
    render() {
      let content;

      if(this.state.file) {
        content = <img src={this.state.file} width='100%'/>;
      } else {
        content = <div><Image style={{fontSize: '50px'}}/> <span style={{fontWeight: 600 ,fontSize: '20px'}}>Tải ảnh lên</span></div>;
      }

      return (
        <div style={{border: '2px dashed #5f5f5f', borderRadius: '10px'}}>
            <Button 
                color="primary" 
                style={{width: '100%', minHeight: '40vh',  borderRadius: '10px'}} 
                onClick={this.handleClick}
            >
                {content}
                <input ref={this.inputImage } type="file" onChange={this.handleImageChange} style={{display: "none"}}/>
            </Button>
        </div>
      )
    }
  }

  export default InputImage;