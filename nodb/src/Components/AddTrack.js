import React, {Component} from 'react';
import './AddTrack.css'

class AddTrack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.title,
            artist: this.artist,
            year: this.year
        }
    }

    render(){
        return(
            <menu id='add-stuff'>
                <input class='track-entry' placeholder='Add Song/Album'/>
                <input class='track-entry' placeholder='Add Artist'/>
                <input class='track-entry' placeholder='Add Year'/>
                <button id='submit-btn'>SUBMIT</button>
            </menu>
        )
    }
}

export default AddTrack;