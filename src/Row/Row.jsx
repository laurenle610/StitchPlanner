// Libraries
import React, { Component } from 'react';

// Components
import { Cell } from '../Cell/Cell.jsx';

// Assets
import './Row.css';

export class Row extends Component {
    constructor(props) {
        super(props);

        this.renderCells = this.renderCells.bind(this);
    }

    renderCells() {
        const { gridWidth, yAxis } = this.props;

        return [...Array(gridWidth)].map( (_, xAxis) => {
            return <Cell key={xAxis} yAxis={yAxis} xAxis={xAxis} />
        });
    }

    render() {
        return (
            <div id='Row' className='row'>
                { this.renderCells() }
            </div>
        );
    }
};