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
        this.handleTitle = this.handleTitle.bind(this);
        this.handleArtist = this.handleArtist.bind(this);
        this.handleYear = this.handleYear.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(e) {
        alert(`A track was submitted: ${this.state.title} by ${this.state.artist} (${this.state.year})`);
        e.preventDefault();
        console.log(this.state.title)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} id='add-stuff'>
                <input className='track-entry' type="text" value={this.state.title} onChange={this.handleTitle} name="name" />
                <input className='track-entry' type="text" value={this.state.artist} onChange={this.handleArtist} name="name" />
                <input className='track-entry' type="text" value={this.state.year} onChange={this.handleYear} name="name" />
                <input id='submit-btn' type="submit" value="Submit" />
            </form>
        )
    }
}

export default AddTrack;