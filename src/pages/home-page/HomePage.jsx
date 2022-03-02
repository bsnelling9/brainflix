import React, {Component} from "react";
import axios from "axios";


import Video from '../../components/Video';
import VideoInfo from '../../components/VideoInfo';
import Comments from '../../components/Comments';
import VideoQueue from '../../components/VideoQueue';

const Api_key = "b2daf369-a0db-4cbc-a2f0-13c96ed1887f"; 
const URL = "https://project-2-api.herokuapp.com";



export default class HomePage extends Component {

    state = {
        videos: [],
        selected: {},
        comment: []
    }

    fetchVideo() {
        console.log('General Kenobi, youre a bold one');
        const id = this.state.selected.id || this.props.match.params.id;
        console.log(id);
        axios.get(`${URL}/videos/${id}/?api_key=${Api_key}`)
        .then(response => {
            this.setState({
                selected: response.data,
                coment: response.data.comments
            })
        })
    }

    componentDidMount() {
        axios.get(`${URL}/videos?api_key=${Api_key}`)
        .then(response => {
            const vidId = this.props.match.params.id || response.data[0].id;
            console.log(vidId);
            axios.get(`${URL}/videos/${vidId}/?api_key=${Api_key}`)
            .then(response2 => {
                this.setState({
                    videos: response.data,
                    selected: response2.data,
                    comment: response2.data.comments
                })
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    componentDidUpdate(prevProps, prevState) {
       if (prevState.selected.id !== this.props.match.params.id) {
            // this.fetchVideo();
            console.log('props'+ this.props.match.params.id);
            console.log('state'+ prevState.selected.id);
            console.log('General Kenobi, youre a bold one');
       }
    }

    render() {
        const {videos, selected, comment} = this.state;

        return (
            <>
                <Video video={selected}/>
                <main className="content">
                <div className='content__wrapper'>
                    <div className='content__leftcolumn'>
                        <VideoInfo video={selected}/>
                        <Comments comment={comment}/>
                    </div>
                    <div className='content__rightcolumn'>
                        <VideoQueue queue={videos} select={selected.id}/>
                    </div>
                </div>
                </main>
            </>
        );
    }
}