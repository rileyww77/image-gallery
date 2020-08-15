import React, { Component } from 'react';

class GalleryItem extends Component {

    

    render() {
        return (
            <>
                <p>{this.props.picture.path}</p>
                <button onClick={(event) => this.props.addLike(this.props.picture.id)}>like!</button>
                {this.props.picture.likes}
                
            </>
        )
    }
}

export default GalleryItem;