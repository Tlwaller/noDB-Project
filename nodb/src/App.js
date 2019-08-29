import React from 'react';
//components
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import TrackList from './Components/TrackList';
import AddTrack from './Components/AddTrack'
//styling
import './App.css';

function App() {
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

export default App;
