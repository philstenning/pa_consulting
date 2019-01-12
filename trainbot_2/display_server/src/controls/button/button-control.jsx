import React, { Component } from 'react';
import { subscribeToProximitySensor } from '../api';
import './button.css';
class ButtonControl extends Component {
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
    render() {
        return (
            <div className='button-container'>
                <h2 className=''>Controller</h2>
                <div>
                    <button>Wii</button>
                </div>
            </div>
        );
    }
}

export default ButtonControl;
