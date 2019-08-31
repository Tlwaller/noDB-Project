import React, {Component} from 'react';
import Axios from 'axios'
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // trackId: this.trackId,
            // title: this.title,
            // artist: this.artist,
            // year: this.year,
            // cover: this.cover

            //DONT DO THIS

            tracks: []
        }
    }

    componentDidMount() {
        Axios.get('/api/tracks')
        .then(response => {
            this.setState({tracks: response.data})
            console.log(response.data)
        })
        .catch(err => console.log(err))
    }

    // updateTrack(id, title) {
    //     Axios.put(`/api/tracks/:${id}`, {title}).then(results => {
    //         this.setState({tracks: results.data});
    //     })
    // }

    updateTitleFn(id, title) {
        Axios.put(`/api/track/:${id}?title`, {title}).then(results => {
            this.setState({tracks: results.data})
        })
    }

    updateArtistFn(id, artist) {

    }

    updateYear(id, year) {

    }

    updateCover(id, cover) {

    }

    render() {
        // const {tracks} = props;

        const tracksMapped = this.state.tracks.length > 0
        ? this.state.tracks.map((track, i) => {
            return (
                <li className='track' key={i}>
                    {/* <img src={track.cover}/> */}
                    {/* <h3>{track.title}</h3> */}
                    <Track trackId={track.id} title={track.title} artist={track.artist} year={track.year} cover={track.cover} updateTitleFn={this.updateTitleFn}/>
                    {/* <h5>by {track.artist}</h5> */}
                </li>
            )
        })
        :'No tracks to display.'

        console.log(this.state)
        return(
            <ul id='tracklist-container'>
                {tracksMapped}
            </ul>
        )
    }
}

export default TrackList;