import React, {Component} from "react";
import axios from "axios";
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoInfo from '../../components/VideoInfo/VideoInfo';
import Comments from '../../components/Comments/Comments';
import VideoQueue from '../../components/VideoQueue/VideoQueue';

import './HomePage.scss';
const Api_key = "b2daf369-a0db-4cbc-a2f0-13c96ed1887f"; 
const URL = "https://project-2-api.herokuapp.com";



export default class HomePage extends Component {

    state = {
        videos: [],
        selected: {},
        comment: []
    }
    /* 
    fetches all videos from api and updates the state
    makes sure that the video playing isnt in the queue
    */
    async fetchAllVideos() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/videos`)
            this.setState({
                videos: response.data, })
            const vidId = this.props.match.params.id || response.data[0].id;
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/videos/${vidId}`)
            this.setState({
                selected: res.data,
                comment: res.data.comments
            })
        } catch(err) {console.log(err)}
    }

    async fetchVideo(id) {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/videos/${id}`)
            this.setState({
                ...this.state,
                selected: res.data,
                comment: res.data.comments
            })
        } catch(err) {console.log(err)}  
    }
    /*
    calls fetch video to get the data
    */
    componentDidMount() {
        this.fetchAllVideos();
    }
    /*
    fetchs new video and scrolls to top of page
    */
    componentDidUpdate(prevProps, prevState) {
        let videoId = this.props.match.params.id;
        if (videoId) {
            if (videoId !== prevProps.match.params.id) {
                this.fetchVideo(videoId);
                window.scrollTo(0,0);
            }
        }
        else {
            if(this.state.videos[0].id !== prevState.selected.id){
                this.fetchVideo(this.state.videos[0].id);
            }
        } 
    }

    render() {
        const {videos, selected, comment} = this.state;
        return (
            <>
                <VideoPlayer video={selected}/>
                <main className="content">
                <div className='content__wrapper'>
                    <div className='content__leftcolumn'>
                        <VideoInfo video={selected}/>
                        <Comments comment={comment}/>
                    </div>
                    <div className='content__rightcolumn'>
                        <VideoQueue queue={videos} select={selected}/>
                    </div>
                </div>
                </main>
            </>
        );
    }
}

