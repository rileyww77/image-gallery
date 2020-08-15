import React, { Component } from 'react';

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
        

        console.log(this.props.picture.description)
        return (
            <>
            {this.state.imageOn ? <img onClick={this.toggleDesription} src={this.props.picture.path}/> : <p onClick={this.toggleDesription}> {this.props.picture.description} </p>}
                <button onClick={(event) => this.props.addLike(this.props.picture.id)}>like!</button>
                {this.props.picture.likes}
                
            </>
        )
    }
}

export default GalleryItem;