import React, {Component} from 'react';
import './TrackList.css';
import Track from './Track';

class TrackList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.title,
            artist: this.artist,
            year: this.year
        }
    }
    render() {
        return(
            <ul id='tracklist-container'>
                <Track
                title={'aaaa'}
                artist={'AAAAA'}
                year={'1998'}/>
            </ul>
        )
    }
}

export default TrackList;