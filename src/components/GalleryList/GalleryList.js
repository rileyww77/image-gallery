import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.jsx'

class GalleryList extends Component {
   
   
    render(){
        console.log(this.props.myPictures)
        return(
            <>
                <p>hi from list!</p>
                {this.props.myPictures.map((picture) => {
                    return(
                        <GalleryItem key={picture.id}
                        picture={picture}
                        addLike={this.props.addLike}/>
                    )
                })}
                </>
        )
    }
}

export default GalleryList;