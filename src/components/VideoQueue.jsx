import VideoCards from './VideoCards';
import {Link} from 'react-router-dom';
import '../styles/components/VideoQueue.scss';

export default function VideoQueue(props) {
    const mappedVideos = props.queue.filter(queue => queue.id !== props.select.id).map((item) => {
        return( 
            <VideoCards 
                key={item.id}
                {...item}            
            />
        );
    });

    return (
        <section className="queue">
            <h3 className='queue__title'>next video</h3>
            <div className="queue__wrapper">
                {mappedVideos}                
            </div>    
        </section>
    )
}