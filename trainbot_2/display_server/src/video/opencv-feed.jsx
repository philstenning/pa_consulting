import React, { Component } from 'react';

class RawFeedVideo extends Component {
    url = `http://${this.props.url}:${this.props.port}/`;
    // url = `https://explore.org/livecams/player/sharks/shark-cam/`;

    render() {
        return (
            <figure>
                <figcaption>Raw Feed from Camera </figcaption>
                <picture>
                    <img
                        src={this.url}
                        alt='raw video feed from opencv on the RPI'
                    />
                </picture>
                {/* this is the feed from the pi zero, you will have to find the ip */}
                {/* address of it and then input it below  */}
                {/* <figcaption> {this.url}</figcaption> */}
            </figure>
        );
    }
}

export default RawFeedVideo;
