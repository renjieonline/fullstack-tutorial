import React from 'react'
import { FaPlay } from 'react-icons/fa'

class Playerlist extends React.Component {

  playVideo = (video) => {
    console.log(video)
    this.props.onPlayVideo(video)
  }

  render() {
    const videos = this.props.videos
    return (
      <div>
        {
          videos.map(video => (
            <React.Fragment key={video.id}>
              <div draggable className="playlist-item">
                <FaPlay onClick={() => this.playVideo(video)} />
                {' '}
                <span>{video.title}</span>
              </div>
              <br />
            </React.Fragment>
          ))
        }
      </div>
    )
  }
}

export default Playerlist