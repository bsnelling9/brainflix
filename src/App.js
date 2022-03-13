import React, { Component }  from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';



class App extends Component {
  
  render() {
    
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
              <Route path='/videos/:id' component= {HomePage}/>
              <Route exact path ='/' component= {HomePage}/>
              <Route path='/upload' component={UploadPage}/>
              {/* <Route path='/videos' component= {HomePage} this should be 404 error/> */}
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;









