// Libraries
import React, { Component } from 'react';

// Assets
import './Cell.css';

export class Cell extends Component {
    constructor(props) {
        super(props);

        this.onCellClick = this.onCellClick.bind(this);
    }

    onCellClick() {
        const { xAxis, yAxis, onCellClick } = this.props;
        onCellClick({colorId: 'a', xAxis, yAxis});
    }

    render() {
        const { cellColor } = this.props;
        const cellStyles = {
            backgroundColor: `#${cellColor}`
        };
        return (
            <span id='Cell' className='cell' onClick={this.onCellClick} style={cellStyles}/>
        );
    }
};