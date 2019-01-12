import React, { Component } from 'react';

class VideoFeed extends Component {
    url = `http://${this.props.url}:${this.props.port}/video_feed`;
    // url = `https://explore.org/livecams/player/sharks/shark-cam/`;

    render() {
        return (
            <figure>
                <figcaption>{this.props.caption}</figcaption>
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

export default VideoFeed;
