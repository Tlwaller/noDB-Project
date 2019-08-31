import React, {Component} from 'react';
//components
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar';
import TrackList from './Components/TrackList/TrackList';
import AddTrack from './Components/AddTrack/AddTrack'
//styling
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trackId: this.trackId,
      title: this.title,
      artist: this.artist,
      year: this.year,
      cover: this.cover
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <SearchBar/>
          <div id='main-container'>
            <main>
              <TrackList/>
              <AddTrack/>
            </main>
          </div>
      </div>
    );
  }
  
}

export default App;
