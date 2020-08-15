import React, { Component } from 'react';

class GalleryItem extends Component {

    state = {
        likesCount: 0
    }

    likeButton = () => {
        this.setState({
            likesCount: this.state.likesCount + 1
        })
    }

    render() {
        return (
            <>
                <p>{this.props.picture.path}</p>
                <button onClick={this.likeButton}>like!</button>
                {this.state.likesCount}
            </>
        )
    }
}

export default GalleryItem;