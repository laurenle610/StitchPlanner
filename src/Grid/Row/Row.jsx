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
        const { colorMap, gridWidth, onCellClick, rowMap, selectedColor, yAxis } = this.props;

        return [...Array(gridWidth)].map((_, xAxis) => {
            const cellColorId = rowMap && rowMap[xAxis];
            const cellColor = colorMap[cellColorId];
            return (
                <Cell
                    key={xAxis}
                    yAxis={yAxis}
                    xAxis={xAxis}
                    onCellClick={onCellClick}
                    selectedColor={selectedColor}
                    cellColor={cellColor}
                />
            );
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