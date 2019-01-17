import React, { Component } from 'react';
import { Hello } from './Hello';

import HOC1 from './components/HOC1';
import HOC2 from './components/HOC2';
import HOC3 from './components/HOC3';

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Hello />

                <HOC1/>
                <HOC2/>
                <HOC3/>
            </React.Fragment>
        );
    }
};
