import React from 'react'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3001/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
class AddVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      video : {
        title: '',
        url: '',
        status: 'added',
        approved: 0,
        likes: 0,
        unlikes: 0,
        currentStatus: 'stopped',
        exitplayprogress: 0
      },
      editedVideo : {
        id: NaN
      }
    };
  }

  componentWillMount () {
    axios.get('youtube').then(
      res => {
        const videos = res.data
        this.setState({
          videos
        })
      }
    ).catch(err => console.log(err))
  }

  inputTitleChange = e => {
    this.setState({
      video: {...this.state.video, title: e.target.value}
    })
  }

  inputUrlChange = e => {
    this.setState({
      video: {...this.state.video, url: e.target.value}
    })
  }

  editedVideoTitleChange = e => {
    this.setState({
      editedVideo: {...this.state.editedVideo, title: e.target.value}
    })
  }

  editedVideoUrlChange = e => {
    this.setState({
      editedVideo: {...this.state.editedVideo, url: e.target.value}
    })
  }

  addVideo = (e, video) => {
    e.preventDefault()
    axios.post('youtube', video).then(
      res => {
        this.setState({
          video: {...this.state.video, url: '', title: ''},
          videos: [...this.state.videos, video]
        })
      }
    ).catch(err => console.log(err))
  }

  saveVideo = () => {
    const editedVideo = this.state.editedVideo
    axios.put('youtube/' + editedVideo.id, editedVideo).then(
      res => {
        this.setState({
          editedVideo: {...editedVideo, id: NaN},
          videos: this.state.videos.map(item => item.id === editedVideo.id ? editedVideo   : item)
        })
      }
    ).catch(err => console.log(err))
  }

  deleteVideo = (id) => {
    axios.delete('youtube/' + id).then(
      res => {
        this.setState({
          videos: this.state.videos.filter(video => video.id !== id)
        })
      }
    ).catch(err => console.log(err))
  }

  handleEdit = (video) => {
    this.setState({
      editedVideo: video
    })
  }

  handleApprove = (video) => {
    video.approved = 1
    axios.put('youtube/' + video.id, video).then(
      res => {
        this.setState({
          videos: this.state.videos.map(item => item.id === video.id ? video   : item)
        })
      }
    ).catch(err => console.log(err))
  }

  render() {
    return (
      <div className="add-video">
        <form>
          <div className="form-group row">
            <label htmlFor="title" className="col-sm-3 col-form-label">Title:</label>
            <input type="text" className="form-control col-sm-9" placeholder="Enter title" name="title" value={this.state.video.title} onChange={this.inputTitleChange} />
          </div>
          <div className="form-group row">
            <label htmlFor="url" className="col-sm-3 col-form-label">Youtube URL:</label>
            <input type="url" className="form-control col-sm-9" placeholder="Enter URL" name="url" value={this.state.video.url} onChange={this.inputUrlChange} />
          </div>
          <button type="submit" className="btn btn-primary" onClick={(e) => this.addVideo(e, this.state.video)}>Add Video</button>
        </form>
        <br />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">Title</th>
              <th scope="col">URL</th>
              <th scope="col">Operation</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.videos.map((video, i) =>
                <tr key={video.title}>
                  <th scope="row">{i + 1}</th>
                
                  {
                    (video.id === this.state.editedVideo.id) ?
                    <>
                      <td>
                        <input type="text" className="form-control col-sm-9" name="title" value={this.state.editedVideo.title} onChange={this.editedVideoTitleChange} />
                      </td>
                      <td>
                        <input  type="text" className="form-control col-sm-9" name="url" value={this.state.editedVideo.url} onChange={this.editedVideoUrlChange} />
                      </td>
                    </>
                      :
                    <>
                      <td>{video.title}</td>
                      <td>{video.url}</td>
                    </>
                  }
                  <td>
                    {
                      (video.id === this.state.editedVideo.id) ?
                        <button type="button" className="btn btn-primary btn-sm" onClick={this.saveVideo}>Save</button>
                      :
                        <button type="button" className="btn btn-primary btn-sm" onClick={() => this.handleEdit(video)}>Edit</button>  
                    }
                    <button type="button" className="btn btn-primary btn-sm" onClick={() => this.deleteVideo(video.id)}>Delete</button>
                    <button type="button" className="btn btn-success btn-sm" onClick={() => this.handleApprove(video)} disabled={video.approved === 1}>Approve</button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default AddVideo