import React, {Component} from "react";
import axios from "axios";


import Video from '../../components/Video';
import VideoInfo from '../../components/VideoInfo';
import Comments from '../../components/Comments';
// import VideoQueue from '../components/VideoQueue';

const Api_key = "b2daf369-a0db-4cbc-a2f0-13c96ed1887f"; 
const URL = "https://project-2-api.herokuapp.com";



export default class HomePage extends Component {

    state = {
        videos: [],
        selected: {},
        comment: []
    }

    componentDidMount() {
        axios.get(`${URL}/videos?api_key=${Api_key}`)
        .then(response => {
            const vidId = response.data[0].id;
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

    render() {
     
        return (
            <>
                <Video video={this.state.selected}/>
                <main className="content">
                <div className='content__wrapper'>
                    <div className='content__leftcolumn'>
                    <VideoInfo video={this.state.selected}/>
                    <Comments comment={this.state.comment}/>
                    </div>
                    <div className='content__rightcolumn'>
                    {/* <VideoQueue queue={this.state.queue} selectedVideo = {this.state.selectedVideo} updateSelectedVideo={this.updateSelectedVideo}/> */}
                    </div>
                </div>
                </main>
            </>
        );
    }
}