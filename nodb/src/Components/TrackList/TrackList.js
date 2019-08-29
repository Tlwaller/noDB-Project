import React, {Component} from 'react';
import axios from 'axios'
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.title,
            artist: this.artist,
            year: this.year
        }
    }

    componentDidMount() {
        axios.get('/api/tracks')
    }

    render() {
        return(
            <ul id='tracklist-container'>
                <Track
                title={this.state.title}
                artist={this.state.artist}
                year={this.state.year}/>
            </ul>
        )
    }
}

export default TrackList;