import React from 'react'
import axios from 'axios'
import Player from './Player'
import Controls from './Controls'
import Playlist from './Playlist'

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      currentVideo: {},
      currentProgress: 0
    };
  }

  componentWillMount () {
    axios.get('http://localhost:3001/youtube').then(
      res => {
        const videos = res.data.filter(item => item.approved === 1)
        this.setState({
          videos,
          currentVideo: videos[0],
          currentProgress: videos[0].exitplayprogress
        })
      }
    ).catch(err => console.log(err))
  }

  play = () => {
    this.player && this.player.video.play()
  }

  pause = () => {
    this.player && this.player.video.pause()
  }

  volumeUp = () => {
    if (this.player.video.volume < 0.9) {
      this.player.video.volume += 0.1;
    } else {
      this.player.video.volume = 1
    }
  }

  volumeDown = () => {
    if (this.player.video.volume >= 0.1) {
      this.player.video.volume -= 0.1;
    } else {
      this.player.video.volume = 0
    }
  }

  replay = () => {
    this.player.video.load();
    this.player.video.play();
  }

  toggleMute = () => {
    this.player.video.muted = !this.player.video.muted;
  }

  like = () => {
    let likes = localStorage.getItem('likes') || this.state.currentVideo.likes
    localStorage.setItem('likes', ++likes)
    this.setState({
      currentVideo: {...this.state.currentVideo, likes}
    })
  }

  unlike = () => {
    let unlikes = localStorage.getItem('unlikes') || this.state.currentVideo.unlikes
    localStorage.setItem('unlikes', ++unlikes)
    this.setState({
      currentVideo: {...this.state.currentVideo, unlikes}
    })
  }

  updateProgressBar = () => {
    const player = this.player.video
    const currentVideo = this.state.currentVideo
    if (player.duration) {
      if (currentVideo.exitplayprogress) {
        player.currentTime = player.duration *  currentVideo.exitplayprogress / 100;
        this.setState({
          currentVideo: {...currentVideo, exitplayprogress: 0}
        })
      }
      this.setState({
        currentProgress: Number(player.currentTime / player.duration * 100)
      })
    }
  }

  playVideo = (video) => {
    this.setState({
      currentVideo: video,
      currentProgress: video.exitplayprogress
    })
    this.player.video.src = video.url
    this.play();
  }

  render() {
    const currentVideo = this.state.currentVideo
    const currentProgress = this.state.currentProgress
    // const currentProgress = this.state.currentProgress
    console.log(currentVideo)
    return (
      <div className="video-container">
        <div className="row">
          <div className="col-lg-8 col-md-12 video-player">
            <h3 className="title">{this.state.currentVideo.title}</h3>
            <br />
            <Player
              ref={el => this.player = el}
              currentVideo={currentVideo}
              onUpdateProgressBar={this.updateProgressBar}
            >
            </Player>
            <Controls
              currentVideo={currentVideo}
              currentProgress={currentProgress}
              onPlay={this.play}
              onPause={this.pause}
              onVolumeUp={this.volumeUp}
              onVolumeDown={this.volumeDown}
              onReplay={this.replay}
              onToggleMute={this.toggleMute}
              onLike={this.like}
              onUnlike={this.unlike}>
            </Controls>
          </div>
          <div className="playlist col-lg-4 col-md-12">
            <Playlist videos={this.state.videos} onPlayVideo={this.playVideo}>
            </Playlist>
          </div>
        </div>
      </div>
    )
  }
}

export default VideoPlayer