import React from 'react'

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: {},
      currentProgress: 0
    };
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps)
    this.setState({
      currentVideo: nextProps.currentVideo
    })
  }

  updateProgressBar = () => {
    this.props.onUpdateProgressBar()
  }


  render() {
    return (
      <video ref={el => (this.video = el)} width="100%" height="80%" preload="auto" onTimeUpdate={this.updateProgressBar}>
        { this.state.currentVideo.url && <source src={this.state.currentVideo.url} type="video/mp4" /> }
        Your browser does not support the video tag.
      </video>
    )
  }
}

export default Player