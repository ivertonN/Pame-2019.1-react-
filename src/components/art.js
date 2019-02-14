import React, { Component } from 'react';
import "./art.css"
import image from '../icons/BumBumTamTam.png'

class Art extends Component {
    render() {
        return (
            <div className="container">
                <img src={image} alt="image_name" className="image"></img>
            </div>
        )
    }
}
    
export default Art;