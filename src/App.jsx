// Libraries
import React, { Component } from 'react';

// Comopnents
import { Grid } from './Grid/Grid.jsx';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            colorMap: {
                1: '333333'
            },
            stitchMap: {
                1: [[1, 1], [1,2]]
            }
        }
    }

    render() {
        return (
            <Grid />
        );
    }
}

export default App;