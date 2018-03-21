import React, {Component} from "react";
import {ButtonToolbar, Button, DropdownButton, MenuItem} from "react-bootstrap";

class Buttons extends Component {
    handleSelect = (event) => {
        this
            .props
            .sizeOfTheGrid(event);
    }
    render() {
        return (
            <div className="center">
                <ButtonToolbar>
                    <Button bsStyle="info" onClick={this.props.playButton}>Play</Button>
                    <Button bsStyle="danger" onClick={this.props.pauseButton}>Pause</Button>
                    <Button bsStyle="warning" onClick={this.props.slow}>Slow</Button>
                    <Button bsStyle="warning" onClick={this.props.fast}>Fast</Button>
                    <Button bsStyle="success" onClick={this.props.seed}>Seed</Button>
                    <Button bsStyle="default" onClick={this.props.clear}>Clear</Button>
                    <DropdownButton title="Grid Size" id="size-menu" onSelect={this.handleSelect}>
                        <MenuItem eventKey="1">20x10</MenuItem>
                        <MenuItem eventKey="2">50x30</MenuItem>
                        <MenuItem eventKey="3">70x50</MenuItem>
                    </DropdownButton>
                </ButtonToolbar>
            </div>
        )
    }
}
export default Buttons;