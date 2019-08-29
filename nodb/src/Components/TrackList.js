import React, {Component} from 'react';
import './TrackList.css';
import Track from './Track';

class TrackList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'bbb',
            artist: 'aaa',
            year: '1988'
        }
    }
    render() {
        return(
            <ul id='tracklist-container'>
                <Track
                title={this.title}
                artist={this.artist}
                year={this.year}/>
            </ul>
        )
    }
}

export default TrackList;