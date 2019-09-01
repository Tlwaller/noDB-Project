import React, {Component} from 'react';
//components
import axios from 'axios';
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar';
import TrackList from './Components/TrackList/TrackList';
import AddTrack from './Components/AddTrack/AddTrack'
//styling
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tracks: []
    }
  }

  componentDidMount() {
    axios.get('/api/tracks')
    .then(response => {
        this.setState({tracks: response.data})
        console.log(response.data)
    })
    .catch(err => console.log(err))
}

  updateTracks = (tracks) => {this.setState({tracks})}

  render() {
    return (
      <div>
        <Header/>
        <SearchBar/>
          <div id='main-container'>
            <main>
              <TrackList tracks={this.state.tracks}/>
              <AddTrack updateTracks={this.updateTracks}/>
            </main>
          </div>
      </div>
    );
  }
}

export default App;
