import React,{Component} from "react";

class Box extends Component{
selectBox = () =>{
    this.props.selectBox(this.props.row, this.props.col);
}
    render(){
        return(
            <div className={this.props.boxClass} id={this.boxID} onClick={this.selectBox}></div>
        )
    }
}
export default Box;