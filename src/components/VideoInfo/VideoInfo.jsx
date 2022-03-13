import ViewsIcon from '../../assets/Icons/views.svg';
import LikesIcons from '../../assets/Icons/likes.svg';

import './VideoInfo.scss';

const VideoInfo = (props) => {

    const {title, channel, views, likes, duration, description, timestamp} = props.video;
    const date = getDate(new Date(timestamp *1));
    return (
        <>
            <section className="video-info">
                <div className="video-info__wrapper">
                    <div className='video-info__wrapper--container'>
                        <h2 className="video-info__title">{title}</h2>
                        <div className="video-info__data">
                            <div className="video-info__column">
                                <h3 className='video-info__channel'>By {channel}</h3>
                                <p className='video-info__date'>{date}</p>
                            </div>
                            <div className="video-info__column video-info__column--data">
                                <div className='video-info__container'>
                                    <img className='video-info__icon' src={ViewsIcon}/>
                                    <p className='video-info__text'>{views}</p>
                                </div>
                                <div className='video-info__container'>
                                    <img className='video-info__icon' src={LikesIcons} alt='video views icon'/>
                                    <p className='video-info__text'>{likes}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='video-info__description'>
                        <p className='body-text'>{description}</p>
                    </div>
                </div>
            </section>
        </>
    )

} 
const getDate = (date) => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    //ternary oporators too add 0 infront of numbers < 10 so i dont have to do iff statements
    return `${month > 9 ? '': '0'}${month}/${day > 9 ? '': '0'}${day}/${year}`
}
export default VideoInfo;