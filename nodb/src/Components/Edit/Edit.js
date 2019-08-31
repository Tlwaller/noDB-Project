import React, {Component} from 'react';
import './Edit.css';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trackId: props.trackId,
            title: props.title,
            artist: props.artist,
            year: props.year,
            cover: props.cover
        };
        this.updateTitle = this.updateTitle.bind(this);
    }

    updateTitle(id, value) {
        this.setState({title: value});
    }

    // updateArtist(value) {
    //     this.setState({artist: value});
    // }

    // updateYear(value) {
    //     this.setState({year: value});
    // }

    // updateCover(value) {
    //     this.setState({cover: value});
    // }

    // updateTitle() {
    //     const {title} = this.state;
    //     const {trackId, updateTitleFn, hideEdit} = this.props;

    //     updateTitleFn(trackId, title);
    //     hideEdit();
    // }

    render() {
        const {hideEdit} = this.props;
        const {title, artist, year, cover} = this.state;
    
        return (
            <section className='edit-parent'>
                <textarea className='edit-textarea'
                value={title}
                onChange={(e) => this.updateTitle(this.state.trackId, e.target.value)}/>

                {/* <textarea className='edit-textarea'
                value={artist}
                onChange={(e) => this.updateArtist(this.state.trackId, e.target.value)}/>

                <textarea className='edit-textarea'
                value={year}
                onChange={(e) => this.updateYear(this.state.trackId, e.target.value)}/>

                <textarea className='edit-textarea'
                value={cover}
                onChange={(e) => this.updateCover(this.state.trackId, e.target.value)}/> */}

                <div className='edit-controls'>
                    <button id='edit-controls-update'
                    className='edit-controls-btn'
                    onClick={this.updateTrack}>Update</button>

                    <button id='edit-controls-cancel'
                    className='edit-controls-btn'
                    onClick={hideEdit}>Cancel</button>
                </div>
            </section>
        )
    }
}

export default Edit;