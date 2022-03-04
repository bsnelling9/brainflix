import React, { Component } from 'react';
import './VideoPlayer.scss';

const VideoPlayer = (props) => {

    const {
        duration,
        image
    } = props.video;
 
    
    return (
        <section className="video">
            <div className='video__wrapper'>
                <video className='video__window' 
                    poster={image}
                    controls
                ></video>
            </div>
        </section>
    )
}


export default VideoPlayer;
