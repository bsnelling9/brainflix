import VideoCards from './VideoCards';
import '../styles/components/VideoQueue.scss';

export default function VideoQueue(props) {
    console.log(props.queue);
    const mappedVideos = props.queue.filter(item => item.id !== props.selectedVideo.id).map((item) => {
        return( 
            <VideoCards 
                key={item.id}
                id = {item.id}
                updateSelectedVideo={props.updateSelectedVideo}
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