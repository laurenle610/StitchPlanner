// Libraries
import React, { Component } from 'react';

// Comopnents
import { Grid } from './Grid/Grid.jsx';

const GRID_HEIGHT = 10;
const GRID_WIDTH = 10;

const initializeStitchMap = (gridHeight) => {
    const stitchMap = {};
    [...Array(gridHeight)].forEach((_, yAxis) => {
        stitchMap[yAxis] = null;
    });
    return stitchMap;
};

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedColor: 'a',
            colorMap: {
                a: '333333',
                b: '000000'
            },
            stitchMap: initializeStitchMap(GRID_HEIGHT),
            gridHeight: GRID_HEIGHT,
            gridWidth: GRID_WIDTH
        }

        this.setStitch = this.setStitch.bind(this);
    }

    setStitch({colorId, xAxis, yAxis}) {
        const { stitchMap } = this.state;

        this.setState(prevState => {
            const newStitchMap = {...prevState.stitchMap};
            const newRow = {...newStitchMap[yAxis]};

            newRow[xAxis] = colorId;
            newStitchMap[yAxis] = newRow;

            return {
                stitchMap: newStitchMap
            }
        });
    }

    render() {
        const { colorMap, gridHeight, gridWidth, selectedColor, stitchMap } = this.state;
        return (
            <Grid
                colorMap={colorMap}
                gridHeight={gridHeight}
                gridWidth={gridWidth}
                onCellClick={this.setStitch}
                selectedColor={selectedColor}
                stitchMap={stitchMap}
            />
        );
    }
}

export default App;