// Libraries
import React, { Component } from 'react';

// Components
import { Row } from '../Row/Row.jsx';

export class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gridHeight: 10,
            gridWidth: 10
        }

        this.renderRows = this.renderRows.bind(this);
    }

    renderRows() {
        const { gridHeight, gridWidth } = this.state;

        return [...Array(gridHeight)].map( (_, yAxis) => {
            return <Row key={yAxis} gridWidth={gridWidth} yAxis={yAxis} />
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