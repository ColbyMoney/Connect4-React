import { useState } from 'react';
import { Square } from "./Square.js";

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state() = {
            board: [
                [<Square/>, <Square/>, <Square/>, <Square/>, <Square/>, <Square/>, <Square/>],
                [<Square/>, <Square/>, <Square/>, <Square/>, <Square/>, <Square/>, <Square/>],
                [<Square/>, <Square/>, <Square/>, <Square/>, <Square/>, <Square/>, <Square/>],
                [<Square/>, <Square/>, <Square/>, <Square/>, <Square/>, <Square/>, <Square/>],
                [<Square/>, <Square/>, <Square/>, <Square/>, <Square/>, <Square/>, <Square/>],
                [<Square/>, <Square/>, <Square/>, <Square/>, <Square/>, <Square/>, <Square/>]
            ]
        };
    }

    render() {
        const { squares } = this.state;
        return (
            <div>
                {squares.map((row, rowIndex) => (
                    <div key={rowIndex}>
                        {row.map((column, columnIndex) => (
                            <span key={columnIndex}>{column}</span>
                        ))}
                    </div>
                ))}
            </div>
        );
    }

}