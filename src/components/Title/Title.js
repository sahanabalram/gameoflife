import React, {Component} from "react";
import Grid from "../../components/Grid";
import "./Title.css";
class Title extends Component {
    constructor() {
        super();
        this.speed = 100;
        this.rows = 30;
        this.cols = 50;
        this.state = {
            generation: 0,
            fullGrid: Array(this.rows).fill().map(()=>Array(this.cols).fill(false))
        }
    }
    render() {
        return (
            <div className="container">
                <h1>The Game of Life</h1>
                <Grid 
                fullGrid={this.state.fullGrid}
                rows={this.rows}
                cols={this.cols}
                selectBox = {this.selectBox}
                />
                <h3>Generations: {this.state.generation}</h3>
            </div>
        )
    }
}

export default Title;