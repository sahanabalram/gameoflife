import React, {Component} from "react";
import "./Grid.css";
import Box from "../../components/Box";
class Grid extends Component {
    render(){
        const width = this.props.cols * 14;
        let rowsArray = [];
        let boxClass = "";
        for(let i = 0; i< this.props.rows; i++) {
            for(let j = 0; j < this.props.cols; j++) {
                let boxID = i + "_" + j;
                boxClass = this.props.fullGrid[i][j] ? "box on" : "box off";
                rowsArray.push(<Box boxClass={boxClass}
                    key={boxID}
                    row={i}
                    col={j}
                    selectBox={this.props.selectBox}/>
                )
            }
        }
        return(
            <div className="grid" style={{width:width}}>
            {rowsArray}
            </div>
        )
    }
}

export default Grid;