import React, {Component} from 'react';
import axios from 'axios';
import './SearchBar.css'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tracks: this.props.tracks,
            id: this.id,
            title: this.title,
            artist: this.artist,
            year: this.year,
            cover: this.cover
        }
    }

    search = (e) => {
        e.preventDefault();
        axios.get(`/api/tracks?title=${this.state.title}`).then(response => {
            this.setState({tracks: response.data})
            console.log(response.data)
        })
        .catch(err => console.log(err))
    }

    render() {
        return(
            <form id='search-bar-container' onSubmit={this.search}>
                <input id='search-bar' placeholder='Lookup by title'/>
                <input id='search-btn' type='submit' value='🔍'/>
            </form>
        )
    }
}

export default SearchBar;