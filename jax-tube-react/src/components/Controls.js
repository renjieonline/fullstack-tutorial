import React from 'react'
import { FaPlay, FaPause, FaVolumeUp, FaVolumeDown, FaStop, FaVolumeMute,  FaThumbsUp, FaThumbsDown } from 'react-icons/fa'


class Controls extends React.Component {

  play = () => {
    this.props.onPlay()
  }

  pause = () => {
    this.props.onPause()
  }

  volumeUp = () => {
    this.props.onVolumeUp()
  }

  volumeDown = () => {
    this.props.onVolumeDown()
  }

  replay = () => {
    this.props.onReplay()
  }

  toggleMute = () => {
    this.props.onToggleMute()
  }

  like = () => {
    this.props.onLike()
  }

  unlike = () => {
    this.props.onUnlike()
  }

  render() {
    const currentVideo = this.props.currentVideo
    const currentProgress = this.props.currentProgress
    return (
      <div className="controls">
        <FaPlay onClick={this.play} />
        <FaPause onClick={this.pause} />
        <FaVolumeUp onClick={this.volumeUp} />
        <FaVolumeDown onClick={this.volumeDown} />
        <FaStop onClick={this.replay} />
        <FaVolumeMute onClick={this.toggleMute} />
        <FaThumbsUp onClick={this.like}></FaThumbsUp><span>{' ' + currentVideo.likes}</span>
        <FaThumbsDown onClick={this.unlike}></FaThumbsDown><span>{' ' + currentVideo.unlikes}</span>
        <br />
        <progress value={currentProgress} max="100"></progress>
      </div>
    )
  }
}

export default Controls