import React, {Component} from 'react' 
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Image from '@material-ui/icons/Image';

class InputImage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        file: '',
        imagePreviewUrl: ''
      };
      this.handleImageChange = this.handleImageChange.bind(this);
      this.handleClick = this.handleClick.bind(this);

    }
  
    handleClick(e) {
        // var fileUploader = this.refs.fileUploader;
        // console.log(fileUploader)
        // fileUploader.click() 
    }
  
    handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }
  
    render() {
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (
            <Grid item xs={6}>
                <img src={imagePreviewUrl} />
            </Grid>
        );
      }
  
      return (
        <div style={{border: '2px dashed #5f5f5f', borderRadius: '10px'}}>
            <Button 
                color="primary" 
                style={{width: '100%', height: '40vh',  borderRadius: '10px'}} 
                // onClick={(e) => this.upload.click()}
            >
                <Image style={{fontSize: '50px'}}/> <span style={{fontWeight: 600 ,fontSize: '20px'}}>Tải ảnh lên</span>
                {imagePreviewUrl}
                <Input ref={(ref) => this.upload = ref} type="file" onChange={this.handleImageChange} style={{display: "none"}}/>
            </Button>
        </div>
      )
    }
  }

  export default InputImage;