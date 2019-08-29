import React, {Component} from 'react'
import './Track.css';

class Track extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            artist: this.props.artist,
            year: this.props.year
        }
    }
    render(){
        return(
            <li className='track'> 
                <span>
                    {this.state.title} by {this.state.artist} {this.state.year}
                </span>
            </li>
        )
    }
}

export default Track;