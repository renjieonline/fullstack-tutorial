import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { VideoService } from '../video.service';
import { Video } from '../video'

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {
  videos: Video[] = [];
  video: Video = {
    id: null,
    title: '',
    url: '',
    status: 'added',
    approved: 0,
    likes: 0,
    unlikes: 0,
    currentStatus: 'stopped',
    exitplayprogress: 0
  };
  editedVideo: Video = new Video();

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.videoService.getVideos()
      .subscribe(
        (data: HttpResponse<any>) => {
          console.log(data);
          this.videos = [...data.body];
        },
        (error: HttpErrorResponse)  => console.log(error)
      );
  }

  addVideo (video: Video) {
    if(!this.isUrl(video.url)) {
      alert('url is invalid');
      return;
    }
    console.log(video);
    this.videoService.addVideo(video)
      .subscribe(video => this.videos.push(video));
  }

  deleteVideo (id: number, index: number) {
    this.videoService.deleteVideo(id).subscribe(
      () => {
        console.log(index);
        this.videos.splice(index, 1);
      }
    );
  }

  saveVideo (video:Video) {
    if(!this.isUrl(video.url)) {
      alert('url is invalid');
      return;
    }
    this.videoService.updateVideo(video).subscribe(
      () => {
        this.editedVideo = new Video();
      }
    );
  }

  handleEdit (video: Video) {
    this.editedVideo = video;
  }

  handleApprove (video: Video) {
    if(!this.isUrl(video.url)) {
      alert('url is invalid');
      return;
    }
    video.approved = 1;
    this.videoService.updateVideo(video).subscribe();
  }

  isUrl (url: string): Boolean {
    const strRegex = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/|www\.)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/;
    const re = new RegExp(strRegex);
    return re.test(url);
  }
}
