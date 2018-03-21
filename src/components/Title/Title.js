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
    selectBox= (row,col) => {
        let gridCopy = cloneArray(this.state.fullGrid);
        gridCopy[row][col] =!gridCopy[row][col];
        this.setState({fullGrid:gridCopy});
    }
    seed = () => {
        let gridCopy = cloneArray(this.state.fullGrid);
        for(let i = 0; i<this.rows; i++) {
            for(let j = 0; j < this.cols; j++) {
                if(Math.floor(Math.random() * 4) ===1){
                    gridCopy[i][j] = true;
                }
            }
        }
        this.setState({fullGrid:gridCopy});
    }

    componentDidMount() {
        this.seed();
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
function cloneArray(arr) {
    return JSON.parse(JSON.stringify(arr));
}
export default Title;