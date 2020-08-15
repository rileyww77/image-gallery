import React, { Component } from 'react';
import './GalleryItem.css'

class GalleryItem extends Component {

    state = {
        imageOn: true,
    }



    toggleDesription = () => {
        this.setState({
            imageOn: !this.state.imageOn,
        })
    }

    render() {
        return (
            <>
                <div className='imageDiv'>
                    {this.state.imageOn ? <img className='image' onClick={this.toggleDesription} src={this.props.picture.path} alt='Personal Pic' /> : <p onClick={this.toggleDesription} className='description'> {this.props.picture.description} </p>}
                </div>
                <div className='buttonDiv'>
                    <button onClick={(event) => this.props.addLike(this.props.picture.id)}>Like!</button>
                    <p>People who like this: {this.props.picture.likes}</p>
                </div>
            </>
        )
    }
}

export default GalleryItem;