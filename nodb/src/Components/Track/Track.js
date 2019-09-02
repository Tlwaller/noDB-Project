import React, {Component} from 'react';
import Edit from './Edit/Edit';
import './Track.css';
import axios from 'axios';
import { NONAME } from 'dns';

class Track extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.trackId,
            title: props.title,
            artist: props.artist,
            year: props.year,
            cover: props.cover,
            editing: false,
            showOptions: false
        }
    }

    deleteTrack(id) {
        axios.delete(`/api/tracks/${id}`).then((response) =>{
            this.props.updateTracks(response.data)
        })
    }

    toggleOptions = () => {
        if(this.state.showOptions == false){
            this.setState({showOptions: true})
        } else this.setState({showOptions: false})
    }

    toggleEdit = () => {
        if(this.state.editing == false){
            this.setState({editing: true})
        } else this.setState({editing: false})
    }

    handleSubmit(id) {
        this.setState({editing: false});
        this.setState({showOptions: false});
        axios.put(`/api/tracks/${id}`, {
            title: this.state.title,
            artist: this.state.artist,
            year: this.state.year,
            cover: this.state.cover
        }).then((response) =>{
            this.props.updateTracks(response.data)
        })
    }

    render(){
        return(
            <section className="track"> 
            <button id='options-btn' onClick={this.toggleOptions}>Options</button>

            <menu id='options-menu' style={this.state.showOptions? {display: 'flex'} : {display: 'none'}}>
                <button id='edit-btn' onClick={this.toggleEdit}>Edit</button>
                    <form onSubmit={(e) => {e.preventDefault(); this.handleSubmit(this.state.id)}} id='edit-stuff' style={this.state.editing? {display: 'inline'} : {display: 'none'}}>
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
                    </form>
                <button id='delete-btn' onClick={(e) => {this.deleteTrack(this.state.id)}}>Delete</button>
            </menu>
                    
                    <img src={this.state.cover} alt='No cover art uploaded.' style={this.state.showOptions? {display: 'none'} : {display: 'flex'}}/>
                <h3 className="track-info" style={this.state.showOptions? {display: 'none'} : {display: 'flex'}}>
                    {this.state.title}
                </h3>
                <h5 className="track-info" style={this.state.showOptions? {display: 'none'} : {display: 'flex'}}>By {this.state.artist} ({this.state.year})</h5>
            </section>
        )
    }
}

export default Track;