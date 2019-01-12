import React, { Component } from 'react';
import { subscribeToProximitySensor } from '../api';

class ProximitySensor extends Component {
    state = {
        proximity: 'no data yet'
    };
    constructor(props) {
        super(props);

        subscribeToProximitySensor((err, proximity) =>
            this.setState({
                proximity
            })
        );
    }

    setStyles() {
        const proximity = this.state.proximity;
        if (proximity < 30) {
            return {
                width: proximity.toString() + '%',
                backgroundColor: 'red'
            };
        } else if (proximity < 50) {
            return {
                width: proximity.toString() + '%',
                backgroundColor: 'yellow'
            };
        }
        const p = proximity < 100 ? proximity : 100;
        return { width: p.toString() + '%', backgroundColor: 'green' };
    }

    render() {
        return (
            <div className='control-container'>
                <h2 className='tab'>Proximity</h2>
                <div />
                <div className='test' style={this.setStyles()} />
            </div>
        );
    }
}

export default ProximitySensor;
