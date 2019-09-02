import React, {Component} from 'react';
import axios from 'axios';
import './AddTrack.css'
import TrackList from '../TrackList/TrackList';

class AddTrack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.title,
            artist: this.artist,
            year: this.year,
            cover: this.cover
        }
        this.handleTitle = this.handleTitle.bind(this);
        this.handleArtist = this.handleArtist.bind(this);
        this.handleYear = this.handleYear.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCover = this.handleCover.bind(this);
    }

    handleTitle(e) {
        this.setState({title: e.target.value});
    }

    handleArtist(e) {
        this.setState({artist: e.target.value});
        console.log(this.state.artist);
    }

    handleYear(e) {
        this.setState({year: e.target.value});
        console.log(this.state.year);
    }

    handleCover(e) {
        this.setState({cover: e.target.value})
        console.log(this.state.cover);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({id: this.state.id + 1})
        axios.post('/api/tracks', {
            id: this.state.id,
            title: this.state.title,
            artist: this.state.artist,
            year: this.state.year,
            cover: this.state.cover
        }).then((response) =>{
            this.props.updateTracks(response.data)
        })
        console.log(this.state.id)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} id='add-stuff'>
                <input 
                className='track-entry' 
                type="text" 
                value={this.state.title} 
                onChange={this.handleTitle} 
                name="name" 
                placeholder='Add a song/album'/>

                <input className='track-entry' 
                type="text" 
                value={this.state.artist} 
                onChange={this.handleArtist} 
                name="name" 
                placeholder='Enter the artist'/>

                <input className='track-entry' 
                type="text" 
                value={this.state.year} 
                onChange={this.handleYear} 
                name="name" 
                placeholder='Enter the year published'/>

                <input className='track-entry' 
                type="text" 
                value={this.state.cover} 
                onChange={this.handleCover} 
                name="name" 
                placeholder='Enter album cover url'/>

                <input id='submit-btn' type="submit" value="Submit" />
            </form>
        )
    }
}

export default AddTrack;