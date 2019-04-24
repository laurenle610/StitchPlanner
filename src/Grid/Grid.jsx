// Libraries
import React, { Component } from 'react';

// Components
import { Row } from './Row/Row.jsx';

export class Grid extends Component {
    constructor(props) {
        super(props);

        this.renderRows = this.renderRows.bind(this);
    }

    renderRows() {
        const { colorMap, gridHeight, gridWidth, onCellClick, selectedColor, stitchMap } = this.props;

        return [...Array(gridHeight)].map((_, yAxis) => {
            return (
                <Row
                    colorMap={colorMap}
                    key={yAxis}
                    gridWidth={gridWidth}
                    yAxis={yAxis}
                    onCellClick={onCellClick}
                    selectedColor={selectedColor}
                    rowMap={stitchMap[yAxis]}
                />
            );
        });
    }

    render() {
        return (
            <div>
                { this.renderRows() }
            </div>
        );
    }
};