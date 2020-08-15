import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.js'

class App extends Component {

  state = {
    myPictures: [],

  }

  //get images on page load
  componentDidMount() {
    this.getGallery();
  }

  //GET request
  getGallery = () => {
    axios.get('/gallery')
      .then((response) => {
        console.log(response.data);
        this.setState({
          myPictures: response.data
        })
      }).catch((error) => {
        console.log(error)
      })

  }

  //PUT request
  addLikes = (id) => {
    axios.put(`/gallery/like/${id}`, this.state.myPictures)
      .then((response) => {
        console.log(response.data)
        this.getGallery();
      }).catch((error) => {
        console.log(error)
      })
  }

  //render the page
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <GalleryList myPictures={this.state.myPictures} addLike={this.addLikes} />
      </div>
    );
  }
}

export default App;
