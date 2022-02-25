import react from 'react';
import '../styles/components/VideoCards.scss';


export default function VideoCards(props) {
    
    return (
        <div className='video-card' onClick={() => {
           props.updateSelectedVideo(props.id);
        }}>
            <div className='video-card__leftcolumn'>
                <div className='video-card__container'>
                    <img className='video-card__img' src={props.image} alt='queue poster'/>
                </div>
            </div>
            <div className='video-card__rightcolumn'>
                <h3 className='subheader'>
                    {props.title}
                </h3>
                <p className='body-text'>
                    {props.channel}
                </p>
            </div>
        </div>     
    )  
}