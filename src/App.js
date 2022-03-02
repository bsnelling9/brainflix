import React, { Component }  from 'react';
import './App.scss';
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import DataDetails from './assets/Data/video-details.json';
import Queue from './assets/Data/videos.json';
import HomePage from './pages/home-page/HomePage';
import UploadPage from './pages/upload-page/UploadPage';



class App extends Component {
  
  state = {
    videos: DataDetails,
    selectedVideo: DataDetails[0],
    queue: Queue
  }; 
  
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
              <Route path='/videos' component= {HomePage}/>
              <Route exact path ='/' component= {HomePage}/>
              <Route path='/upload' component={UploadPage}/>
          </Switch>

        </Router>
        
      </div>
    )
  }
}

export default App;









