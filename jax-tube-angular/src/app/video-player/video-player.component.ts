import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { PlayerComponent } from '../player/player.component';
import { ControlsComponent } from '../controls/controls.component';
import { VideoService } from '../video.service';
import { Video } from '../video'

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  @ViewChild(PlayerComponent, { static: true })
  playerComponent: PlayerComponent;
  @ViewChild(ControlsComponent, { static: true })
  controlsComponent: ControlsComponent;

  videos: Video[] = [];
  currentVideo: Video = new Video();
  currentProgress: number = 0

  constructor(private videoService: VideoService) { }

  get player() {
    return this.playerComponent.player.nativeElement;
  }

  ngOnInit() {
    this.videoService.getVideos()
      .subscribe(
        (data: HttpResponse<any>) => {
          console.log(data);
          this.videos = [...data.body];
          this.currentVideo = this.videos[0];
          this.currentProgress = this.currentVideo.exitplayprogress
          console.log(this.currentVideo);
        },
        (error: HttpErrorResponse)  => console.log(error)
      );
  }

  play() { 
    console.log('play triggered');
    this.player.play();
  }

  pause () { 
    this.player.pause();
  } 

  volumeUp () {
    console.log(this.player.volume)
    if (this.player.volume < 0.9) {
      this.player.volume += 0.1;
    } else {
      this.player.volume = 1
    }
  } 

  volumeDown () {
    if (this.player.volume >= 0.1) {
      this.player.volume -= 0.1;
    } else {
      this.player.volume = 0
    }
  }

  replay () { 
    this.player.load();
    this.player.play();
  } 

  toggleMute () { 
    this.player.muted = !this.player.muted;
  } 

  like () {
    ++this.currentVideo.likes
  }

  unlike () {
    ++this.currentVideo.unlikes
  }

  updateProgressBar () {
    if (this.player.duration) {
      if (this.currentVideo.exitplayprogress) {
        this.player.currentTime = this.player.duration *  this.currentVideo.exitplayprogress / 100;
        this.currentVideo.exitplayprogress = 0;
      }
      this.currentProgress = Number(this.player.currentTime / this.player.duration * 100);
    }
  }

  playVideo (video: Video) {
    console.log(video);
    this.currentVideo = video;
    this.player.src = video.url;
    this.play();
  }
}
