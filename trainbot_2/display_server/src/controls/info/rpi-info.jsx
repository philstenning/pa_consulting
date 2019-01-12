import React, { Component } from 'react';
import { subscribeToInfo } from '../../api';
import './info.css';
import Test from './test';
const uniqueString = require('unique-string');

const Foo = props => (
    <div className='item'>
        <h3>{props.title}</h3>
        hello {props.data}
    </div>
);

class Info extends Component {
    state = {
        proximity: 'no data yet',
        info: []
    };
    constructor(props) {
        super(props);

        subscribeToInfo((err, infoItem) => {
            console.log(infoItem);
            // if item exists then update it
            // else add new item
            // use header as key for comparison.
            infoItem.header = String(infoItem.header).trim();
            const result = this.checkInfoItemExistsAndUpdate(infoItem);
            // if (result === -1) {
            //     console.log('info item not found...');
            this.addInfoItem(infoItem);
            // }
        });
    }

    checkInfoItemExistsAndUpdate = infoItem => {
        if (!infoItem) return console.log('error: no item ');
        let info = [...this.state.info];
        // this returns an array of one or more.
        info = info.filter(e => e.header === infoItem.header);
        // return if empty
        if (info.length === 0) {
            return;
        }

        //now remove existing info items with the same header.
        //and setState
        info = [...this.state.info];
        info = info.filter(e => e.header !== infoItem.header);
        this.setState({ info });
    };

    addInfoItem = item => {
        //get all the info items from state.
        const info = [...this.state.info];

        item.id = uniqueString();
        item.time = new Date();
        info.push(item);
        let v = info.sort((a, b) => {
            return new Date(b.time) - new Date(a.time);
        });
        // console.log(v);
        this.setState({ info });
        console.log(`Info Item added: ${JSON.stringify(item)}`);
    };

    removeInfoItem = id => {
        console.log(id);
        let info = [...this.state.info];
        info = info.filter(e => e.id !== id);
        this.setState({ info });
    };

    render() {
        return (
            <div className='info-control-container'>
                <div className='control-row-one'>
                    <p className='label'>Info</p>
                </div>
                <div className='control-row-two'>
                    {this.state.info.map(item => (
                        <div key={item.id} className='item'>
                            <span>{item.header}</span>
                            <span>{item.message}</span>
                            <button
                                onClick={() => this.removeInfoItem(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Info;
