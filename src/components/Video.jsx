import '../styles/components/Video.scss';

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
 {/* <div className='video__controls'>
                <div className='video__control video__control--btn'>
                    <img className='video__contols--btn'
                        src={PlayIcon}
                        alt='play button'
                    />
                </div>
                <div className='video__control video__control--progress'>
                    <progress id='progress' value='0' max='100'></progress>
                    <p className='player__time'>{ `0:00 / ${duration === '' ? '0:00' : duration}` }</p>
                </div>
                <div className='video__control'>
                    <img className='video__contols--btn'
                        src={FullScreen}
                        alt='fullscreen button'
                    />
                    <img className='video__contols--btn'
                        src={VolumeIcon}
                        alt='volume button'
                    />
                </div>
            </div> */}