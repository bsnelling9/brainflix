import React from 'react';
import './VideoPlayer.scss';

const VideoPlayer = (props) => {

    const {
        image
    } = props.video;
    console.log(image);
    //takes the image thats passed down from home page and uses it as a video poster, duration is to keep track of video length
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
