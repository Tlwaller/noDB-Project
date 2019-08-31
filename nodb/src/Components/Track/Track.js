import React, {Component} from 'react';
import {ObjectEditor} from 'object-editor-react';
import Edit from '../Edit/Edit';
import './Track.css';

class Track extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trackId: props.trackId,
            title: props.title,
            artist: props.artist,
            year: props.year,
            cover: props.cover,
            editing: false,
            showMenu: false
        }
        this.hideEdit = this.hideEdit.bind( this );
        this.showEdit = this.showEdit.bind( this );
        this.toggleMenu = this.toggleMenu.bind( this );
        this.hideMenu = this.hideMenu.bind( this );
    }

    showEdit() {
        this.setState({editing: true, showMenu: true})
    }

    hideEdit() {
        this.setState({editing: false})
    }

    toggleMenu() {
        this.setState({showMenu: !this.state.showMenu});
    }

    hideMenu() {
        if (this.state.showMenu === true) {
            this.setState({showMenu: false});
        }
    }

    render(){
        const {text} = this.props;
        const {editing, showMenu} = this.state;
        return(
            <section className="track" onClick={this.hideMenu}> 
            <div className='track-menu-controls'>
                <button onClick={this.toggleMenu}>Options</button>
                <div className='track-menu' style={{display: showMenu? 'flex' : 'none'}}>
                    <span onClick={this.showEdit}>Edit</span>
                </div>
            </div>
            <div className='track content' style={{display: editing? 'flex': 'none'}}>
                {
                    editing
                    ?
                        <Edit 
                        trackId={this.state.trackId}
                        title={this.state.title}
                        artist={this.state.artist}
                        year={this.state.year}
                        cover={this.state.cover}
                        hideEdit={this.hideEdit}
                        updateTitleFn={this.props.updateTitleFn}/>
                    :
                        <span className='title-text'>{text}</span>
                }
            </div>
                
                <img src={this.state.cover} alt='' style={{display: editing? 'none' : 'flex'}}/>
                <h3 className="track-info">
                    {this.state.title}
                    
                </h3>
                <h5 className="track-info">By {this.state.artist} ({this.state.year})</h5>
            </section>
        )
    }
}

export default Track;