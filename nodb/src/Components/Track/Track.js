import React, {Component} from 'react';
import Edit from './Edit/Edit';
import './Track.css';
import Axios from 'axios';
import { NONAME } from 'dns';

class Track extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trackId: props.trackId,
            title: props.title,
            artist: props.artist,
            year: props.year,
            cover: props.cover
        }
    }

    deleteTrack(id) {
        Axios.delete(`/api/tracks/:${id}`).then(document.location.reload())
    }   

    editTrack(id) {
        debugger
        Axios.put(`api/tracks/${id}`, {
            title: this.state.title,
            artist: this.state.artist,
            year: this.state.year,
            cover: this.state.cover
        })
    }

    render(){
        return(
            <section className="track"> 
                {/* <form onSubmit={(e) => {e.preventDefault(); this.editTrack(this.state.trackId)}} id='edit-stuff'>
                    <input 
                    className='track-edit' 
                    type="text" 
                    value={this.state.title} 
                    onChange={(e) => this.setState({title: e.target.value})} 
                    name="name" 
                    placeholder='Add a song/album'/>

                    <input className='track-edit' 
                    type="text" 
                    value={this.state.artist} 
                    onChange={(e) => this.setState({artist: e.target.value})} 
                    name="name" 
                    placeholder='Enter the artist'/>

                    <input className='track-edit' 
                    type="text" 
                    value={this.state.year} 
                    onChange={(e) => this.setState({year: e.target.value})} 
                    name="name" 
                    placeholder='Enter the year published'/>

                    <input className='track-edit' 
                    type="text" 
                    value={this.state.cover} 
                    onChange={(e) => this.setState({cover: e.target.value})} 
                    name="name" 
                    placeholder='Enter album cover url'/>

                    <input id='update-btn' type="submit" value="Submit" />
                </form> */}
            <button id='delete-btn' onClick={this.deleteTrack}>Delete</button>
                    
                    <img src={this.state.cover} alt=''/>
                <h3 className="track-info">
                    {this.state.title}
                    
                </h3>
                <h5 className="track-info">By {this.state.artist} ({this.state.year})</h5>
            </section>
        )
    }
}

export default Track;