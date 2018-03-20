import React, {Component} from "react";

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
            <h1>Grid Component</h1>
            </div>
        )
    }
}

export default Grid;