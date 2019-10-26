import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  @Input() videos: Video[];

  @Output() onPlayVideo = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  playVideo(video: Video) {
    this.onPlayVideo.emit(video)
  }

}
