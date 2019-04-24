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
        const { xAxis, yAxis } = this.props;
        console.log([xAxis, yAxis]);
    }

    render() {
        return (
            <span id='Cell' className='cell' onClick={this.onCellClick} />
        );
    }
};