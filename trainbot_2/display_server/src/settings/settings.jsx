import React from 'react';
import './settings.css';

export default props => {
    const handleClick = e => {
        e.stopPropagation();
    };
    const saveValue = e => {
        console.log('blur');
    };
    return (
        <div className='overlay' onClick={props.toggle}>
            <div className='settings-panel' onClick={handleClick}>
                <h2>Settings</h2>
                {props.videoFeeds.map(feed => (
                    <div className='settings-panel-item' key={feed.id}>
                        <label>URL:</label>
                        <input
                            type='text'
                            defaultValue={feed.url}
                            onBlur={saveValue}
                        />
                        <label>Port:</label>
                        <input type='text' defaultValue={feed.port} />
                    </div>
                ))}
            </div>
        </div>
    );
};
