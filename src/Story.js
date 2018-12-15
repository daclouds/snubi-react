import React, { Component } from 'react'
import './Story.css'

class Story extends Component {
  render() {
    const {imageUrl, tags, heartRate} = this.props.info
    console.log(imageUrl, tags, heartRate)
    return (
      <div className="container">
        <img 
          src={imageUrl}
        />
        <p className="tags">{tags}</p>
        <p className="heartRate">{heartRate}</p>
      </div>
    );
  }
}

export default Story
