import React, {Component} from "react";
import Grid from "../../components/Grid";
import Buttons from "../../components/Buttons";
import "./Title.css";
class Title extends Component {
    constructor() {
        super();
        this.speed = 100;
        this.rows = 30;
        this.cols = 50;
        this.state = {
            generation: 0,
            fullGrid: Array(this.rows)
                .fill()
                .map(() => Array(this.cols).fill(false))
        }
    }
    selectBox = (row, col) => {
        let gridCopy = cloneArray(this.state.fullGrid);
        gridCopy[row][col] = !gridCopy[row][col];
        this.setState({fullGrid: gridCopy});
    }
    seed = () => {
        let gridCopy = cloneArray(this.state.fullGrid);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (Math.floor(Math.random() * 4) === 1) {
                    gridCopy[i][j] = true;
                }
            }
        }
        this.setState({fullGrid: gridCopy});
    }
    playButton = () => {
        clearInterval(this.intervalID);
        this.intervalID = setInterval(this.play, this.speed);
    }
    slow = () => {
        this.speed = 1000;
        this.playButton();
    }

    fast = () => {
        this.speed = 100;
        this.playButton();
    }

    pauseButton = () => {
        clearInterval(this.intervalID);
    }
    clear = () => {
        let grid = Array(this.rows)
            .fill()
            .map(() => Array(this.cols).fill(false));
        this.setState({fullGrid: grid, generation: 0});
    }

    sizeOfTheGrid = (size) => {
        switch (size) {
            // case number is represented as a string since its getting the event id key from MenuItem in the button component
            case "1":
                this.cols = 20;
                this.rows = 10;
                break;
            case "2":
                this.cols = 50;
                this.rows = 30;
                break;
            default:
                this.cols = 70;
                this.rows = 50;
        }
        this.clear();
    }
    play = () => {
        let grid1 = this.state.fullGrid;
        let grid2 = cloneArray(this.state.fullGrid);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                let count = 0;
                //   check each neighbour is alive or not
                if (i > 0) 
                if (grid1[i - 1][j]) 
                        count++;
                if (i > 0 && j > 0) 
                    if (grid1[i - 1][j - 1]) 
                        count++;
                if (i > 0 && j < this.cols - 1) 
                    if (grid1[i - 1][j + 1]) 
                        count++;
            if (j < this.cols - 1) 
                    if (grid1[i][j + 1]) 
                        count++;
            if (j > 0) 
                    if (grid1[i][j - 1]) 
                        count++;
            if (i < this.rows - 1) 
                    if (grid1[i + 1][j]) 
                        count++;
            if (i < this.rows - 1 && j > 0) 
                    if (grid1[i + 1][j - 1]) 
                        count++;
            if (i < this.rows - 1 && this.cols - 1) 
                    if (grid1[i + 1][j + 1]) 
                        count++;
            if (grid1[i][j] && (count < 2 || count > 3)) 
                    grid2[i][j] = false;
                if (!grid1[i][j] && count === 3) 
                    grid2[i][j] = true;
                }
            }
        this.setState({
            fullGrid: grid2,
            generation: this.state.generation + 1
        })
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
                    selectBox={this.selectBox}/>
                <Buttons
                    playButton={this.playButton}
                    pauseButton={this.pauseButton}
                    slow={this.slow}
                    fast={this.fast}
                    seed={this.seed}
                    clear={this.clear}
                    sizeOfTheGrid={this.sizeOfTheGrid}/>
                <h3>Generations: {this.state.generation}</h3>
            </div>
        )
    }
}
function cloneArray(arr) {
    return JSON.parse(JSON.stringify(arr));
}
export default Title;