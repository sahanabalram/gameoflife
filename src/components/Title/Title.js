import React, {Component} from "react";
import Grid from "../../components/Grid";
class Title extends Component {
    constructor() {
        super();
        this.state = {
            generation: 0
        }
    }
    render() {
        return (
            <div>
                <h1>The Game of Life</h1>
                <Grid/>
                <h3>Generations: {this.state.generation}</h3>
            </div>
        )
    }
}

export default Title;