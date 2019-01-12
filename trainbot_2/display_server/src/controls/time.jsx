import React, { Component } from 'react';
import { subscribeToTimer } from '../api';

class Time extends Component {
    state = {
        timestamp: 'dagg'
    };
    constructor(props) {
        super(props);

        subscribeToTimer((err, timestamp) =>
            this.setState({
                timestamp
            })
        );
    }

    render() {
        return (
            <div className=''>
                <p className='App-intro'>
                    This is the timer value: {this.state.timestamp}
                </p>
            </div>
        );
    }
}

export default Time;
