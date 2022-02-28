import React, { Component } from 'react';
import '../styles/components/Video.scss';


// export default class Video extends Component {
//     render() {
//         const {
//             duration,
//             image
//         } = this.props.video;
//         return (
//             <section className="video">
//                 <div className='video__wrapper'>
//                     <video className='video__window' 
//                         poster={image}
//                         controls
//                     ></video>
//                 </div>
//             </section>
//         )
//     }
// }


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
