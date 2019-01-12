import React, { Component } from 'react';
import './App.css';
// import Time from './controls/time';
import ProximitySensor from './controls/proximity-sensor';
import Slider from './controls/slider-control';
import VideoFeed from './video/video-feed';
import Info from './controls/info/rpi-info';
import Settings from './settings/settings';

// const Settings = () => {
//     return <div className='settings-panel'>settings here</div>;
// };

// pi 7" touchscreen Screen Resolution 800 x 480 pixels
class App extends Component {
    state = {
        videoFeeds: [
            {
                id: 2,
                url: '192.168.0.4',
                port: '8081',
                caption: 'raw'
            },
            {
                id: 1,
                url: '192.168.0.18',
                port: '5000',
                caption: 'Processed Feed'
            }
        ],
        rawFeedUrl: '192.168.0.4',
        rawFeedPort: '8081',
        OpencvFeedUrl: '192.168.0.18',
        OpencvFeedPort: '5000',
        websocketUrl: '192.168.0.4',
        websocketPort: 5000,
        settingsShow: false
    };

    toggleSettingsPage = () => {
        const settings = this.state.settingsShow;
        this.setState({ settingsShow: !settings });
        console.log(!settings);
    };

    render() {
        const showSettings = this.state.settingsShow;
        let settings;

        if (showSettings) {
            settings = (
                <Settings
                    videoFeeds={this.state.videoFeeds}
                    toggle={this.toggleSettingsPage}
                    foo='fff'
                />
            );
        }

        return (
            <main>
                {settings}
                <div className='App'>
                    <div className='feeds'>
                        {this.state.videoFeeds.map(feed => (
                            <VideoFeed
                                key={feed.id}
                                url={feed.url}
                                port={feed.port}
                                caption={feed.caption}
                            />
                        ))}
                        {/* <VideoFeed
                            url={this.state.OpencvFeedUrl}
                            port={this.state.OpencvFeedPort}
                            caption='Processed video feed'
                        />
                        <VideoFeed
                            url={this.state.rawFeedUrl}
                            port={this.state.rawFeedPort}
                            caption='Raw video feed'
                        /> */}
                        <div>
                            <button onClick={this.toggleSettingsPage}>
                                settings
                            </button>
                        </div>
                    </div>
                    <div className='controls'>
                        <ProximitySensor />
                        <Slider />
                        <Info />
                    </div>
                </div>
            </main>
        );
    }
}

export default App;
