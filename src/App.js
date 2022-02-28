import React, { Component }  from 'react';
import './App.scss';
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Video from './components/Video';
import VideoInfo from './components/VideoInfo';
import DataDetails from './assets/Data/video-details.json';
import Comments from './components/Comments';
import Queue from './assets/Data/videos.json';
import VideoQueue from './components/VideoQueue';
import HomePage from './pages/home-page/HomePage';




class App extends Component {
  
  state = {
    videos: DataDetails,
    selectedVideo: DataDetails[0],
    queue: Queue
  }; 
  
  updateSelectedVideo = (videoId) => {
    const nextVideo = this.state.videos.find((video) => video.id === videoId);
    this.setState({
        selectedVideo: nextVideo
      });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
              <Route path='/videos/:id' component= {HomePage}/>
              <Route exact path ='/' component= {HomePage}/>
          </Switch>



        </Router>
        
    
        {/* <Video video={this.state.selectedVideo}/>
        <main className='content'>
          <div className='content__wrapper'>
            <div className='content__leftcolumn'>
              <VideoInfo video={this.state.selectedVideo}/>
              <Comments comment={this.state.selectedVideo.comments}/>
            </div>
            <div className='content__rightcolumn'>
              <VideoQueue queue={this.state.queue} selectedVideo = {this.state.selectedVideo} updateSelectedVideo={this.updateSelectedVideo}/>
            </div>
          </div>
        </main> */}
      </div>
    )
  }
}

export default App;









