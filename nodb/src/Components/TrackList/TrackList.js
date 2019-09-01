import React, {Component} from 'react';
import Axios from 'axios'
import './TrackList.css';
import Track from '../Track/Track';

function TrackList(props) {
    const tracksMapped = props.tracks.length > 0
    ? props.tracks.map((track, i) => {
        return (
            <li className='track' key={i}>
                <Track trackId={track.id} title={track.title} artist={track.artist} year={track.year} cover={track.cover}/>
            </li>
        )
    })
    :'No tracks to display.'

    return(
        <ul id='tracklist-container'>
            {tracksMapped}
        </ul>
    )
}

export default TrackList;