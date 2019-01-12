/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Component } from 'react';
import { sendDataToControlTrain, subscribeToTrainRemoteControl } from '../api';

const innerGrid = css`
    text-align: center;
    display: grid;
    column-gap: 10px;
    grid-template-columns: 1fr 3fr 3fr 1fr;
`;

const innerGridItem = css`
    
    padding: 12px;
    text-align: center;
    color: #f2f2f2;
    font-size: 30px;
    line-height:1.8;
}
`;

const buttonStyle = css`

border: none;
width:80px;
height:80px;
border-radius: 40px;
font-size: 20px;
}
`;

class Slider extends Component {
    state = {
        sliderValue: 0,
        direction: 'Stopped',
        speed: 0
    };

    constructor(props) {
        super(props);

        subscribeToTrainRemoteControl((err, data) => {
            console.log(data);
            let { direction, speed } = data;
            let sliderValue = 0;
            switch (direction.toLowerCase()) {
                case 'forwards':
                    speed = speed < 0 ? -speed : speed;
                    sliderValue = speed;
                    break;
                case 'backwards':
                    sliderValue = speed < 0 ? speed : -speed;
                    speed = speed < 0 ? -speed : speed;
                    break;
                default:
                    direction = 'Stopped';
                    speed = 0;
            }
            console.log(sliderValue);
            this.setState({
                sliderValue: sliderValue,
                direction: this.capitalizeFirstLetter(direction),
                speed: speed
            });
        });
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    setSliderValues(e) {
        const val = e.target.value;
        let direction;
        let speed = 0;

        if (val > 0) {
            speed = val;
            direction = 'Forwards';
        } else if (val < 0) {
            speed = -val;
            direction = 'Backwards';
        } else {
            speed = Number(val);
            direction = 'Stopped';
        }

        this.setState(state => {
            return { sliderValue: val, direction: direction, speed: speed };
        });
        sendDataToControlTrain(speed, direction);
    }

    stopTrain() {
        this.setState(state => {
            return { sliderValue: 0, direction: 'Stopped', speed: Number(0) };
        });
        sendDataToControlTrain(0, 'Stopped');
    }

    displayStop() {
        if (this.state.speed === 0) {
            return;
        }
        return (
            <button css={buttonStyle} onClick={() => this.stopTrain()}>
                STOP
            </button>
        );
    }

    render() {
        return (
            <div className='control-container'>
                <h2 className='tab'>Motor</h2>
                <div css={innerGrid}>
                    <div />
                    <div css={innerGridItem}>{this.state.direction}</div>
                    <div css={innerGridItem}>{this.state.speed}%</div>
                    <button
                        css={buttonStyle}
                        onClick={() => this.stopTrain()}
                        className={
                            this.state.speed === 0 ? 'bg-light-grey' : 'bg-red'
                        }
                    >
                        STOP
                    </button>
                </div>
                <input
                    type='range'
                    id='start'
                    name='volume'
                    min='-100'
                    max='100'
                    value={this.state.sliderValue}
                    onChange={e => this.setSliderValues(e)}
                />
            </div>
        );
    }
}

export default Slider;
