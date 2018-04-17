import React, {Component} from "react";
import {Jumbotron} from "react-bootstrap";
class Rules extends Component {
    render() {
        return (
            <Jumbotron>
                <div>
                    <p className="text-center">
                        <strong>The Rules of the Game</strong>
                    </p>
                    <ol>
                        <li>Any live cell with fewer than two live neighbors dies, as if caused by
                            under-population.</li>
                        <li>Any live cell with two or three live neighbors lives on to the next generation.</li>
                        <li>Any live cell with more than three live neighbors dies, as if by overcrowding.</li>
                        <li>Any dead cell with exactly three live neighbors becomes a live cell, as if
                            by reproduction.</li>
                    </ol>
                </div>
            </Jumbotron>
        )
    }
}

export default Rules;