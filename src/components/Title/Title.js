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
playButton = () => {
    clearInterval(this.intervalID);
    this.intervalID = setInterval(this.play,this.speed);
}

pauseButton = () => {
    clearInterval(this.intervalID);
}
play = () => {
    let grid1 = this.state.fullGrid;
    let grid2 = cloneArray(this.state.fullGrid);
    for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          let count = 0;
        //   check each neighbour is alive or not
          if (i > 0) if (grid1[i - 1][j]) count++;
          if (i > 0 && j > 0) if (grid1[i - 1][j - 1]) count++;
          if (i > 0 && j < this.cols - 1) if (grid1[i - 1][j + 1]) count++;
          if (j < this.cols - 1) if (grid1[i][j + 1]) count++;
          if (j > 0) if (grid1[i][j - 1]) count++;
          if (i < this.rows - 1) if (grid1[i + 1][j]) count++;
          if (i < this.rows - 1 && j > 0) if (grid1[i + 1][j - 1]) count++;
          if (i < this.rows - 1 && this.cols - 1) if (grid1[i + 1][j + 1]) count++;
          if (grid1[i][j] && (count < 2 || count > 3)) grid2[i][j] = false;
          if (!grid1[i][j] && count === 3) grid2[i][j] = true;
        }
    }
    this.setState({fullGrid:grid2,generation:this.state.generation + 1})
}
    componentDidMount() {
        this.seed();
        this.playButton();
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