import React, {Component} from "react";
import axios from "axios";
import Video from '../../components/Video';
import VideoInfo from '../../components/VideoInfo';
import Comments from '../../components/Comments';
import VideoQueue from '../../components/VideoQueue';

import './HomePage.scss';
const Api_key = "b2daf369-a0db-4cbc-a2f0-13c96ed1887f"; 
const URL = "https://project-2-api.herokuapp.com";



export default class HomePage extends Component {

    state = {
        videos: [],
        selected: {},
        comment: []
    }

    async fetchAllVideos() {
        try {
            const response =  await axios.get(`${URL}/videos?api_key=${Api_key}`)
            this.setState({
                videos: response.data, })
                const vidId = this.props.match.params.id || response.data[0].id;
            const res = await axios.get(`${URL}/videos/${vidId}/?api_key=${Api_key}`)
            this.setState({
                selected: res.data,
                comment: res.data.comments
            })
        } catch(err) {console.log(err)}
    }

    async fetchVideo(id) {
        try {
            console.log('General Kenobi, youre a bold one');
            const res = await axios.get(`${URL}/videos/${id}/?api_key=${Api_key}`)
            this.setState({
                ...this.state,
                selected: res.data,
                comment: res.data.comments
            })
        } catch(err) {console.log(err)}  
    }

    componentDidMount() {
        this.fetchAllVideos();
    }

    componentDidUpdate(prevProps, prevState) {
        let videoId = this.props.match.params.id;
        if (videoId) {
            if (videoId !== prevProps.match.params.id) {
                this.fetchVideo(videoId);
           }
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
                        <VideoQueue queue={videos} select={selected}/>
                    </div>
                </div>
                </main>
            </>
        );
    }
}

