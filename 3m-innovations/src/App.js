import React, { Component } from 'react';
import logo from './3amLogo.png';
import video from './video.mp4';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the home of Flare</h2>
        </div>
        <div className="body-container">
          <video controls preload>
            <source src={video} type="video/mp4"/>
          </video>
          <div className='embed-container'>
            <iframe src='https://drive.google.com/file/d/0B-SGm7O0yIvWQzZGeWtpZXhTbk0/preview' width='640' height='480'>
            </iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
