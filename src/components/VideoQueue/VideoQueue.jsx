import VideoCards from '../VideoCards/VideoCards';
import './VideoQueue.scss';

export default function VideoQueue(props) {

    /*
    maps the videos passed down from homepage, and filters so the video playing isnt in the list
    returns a card of each mapped item
    */
    const mappedVideos = props.queue.filter(queue => queue.id !== props.select.id).map((item) => {
        console.log(item);
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