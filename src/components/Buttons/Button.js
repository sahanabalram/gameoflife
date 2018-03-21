import React, {Component}from "react";
import {ButtonToolbar,Button} from "react-bootstrap";
class Buttons extends Component {
    render(){
        return(
            <div className="center">
            <ButtonToolbar>
            <Button bsStyle = "primay" onClick={this.props.playButton}>Play</Button>
            <Button bsStyle = "primay" onClick={this.props.pauseButton}>Pause</Button>
            <Button bsStyle = "primay" onClick={this.props.slow}>Slow</Button>
            <Button bsStyle = "primay" onClick={this.props.fast}>Fast</Button>
            <Button bsStyle = "primay" onClick={this.props.clear}>Clear</Button>
            <Button bsStyle = "primay" onClick={this.props.sizeOfTheGrid}>Grid Size</Button>
            </ButtonToolbar>
            </div>
        )
    }
}

export default Buttons;