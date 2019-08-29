import React, {Component} from 'react'

class Track extends Component {
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
            <li class='track'>{this.props.title} by {this.props.artist} {this.props.year}</li>
        )
    }
}

export default Track;