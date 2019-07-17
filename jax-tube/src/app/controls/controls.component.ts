import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  @Input() currentVideo: Video;
  @Input() currentProgress: number;

  @Output() onPlay = new EventEmitter();
  @Output() onPause = new EventEmitter();
  @Output() onVolumeUp = new EventEmitter();
  @Output() onVolumeDown = new EventEmitter();
  @Output() onReplay = new EventEmitter();
  @Output() onToggleMute = new EventEmitter();
  @Output() onLike = new EventEmitter();
  @Output() onUnlike = new EventEmitter();

  @ViewChild('progressBar', { static: true }) progressBar: ElementRef;
  constructor() { }

  ngOnInit() {
    console.log(this.currentProgress, this.currentVideo)
  }

  play () { 
    console.log('onPlay emit')
    this.onPlay.emit();
  }

  pause () { 
    this.onPause.emit();
  } 

  volumeUp () {
    this.onVolumeUp.emit();
  } 

  volumeDown () {
    this.onVolumeDown.emit();
  }

  replay () { 
    this.onReplay.emit();
  } 

  toggleMute () { 
    this.onToggleMute.emit();  } 

  like () {
    this.onLike.emit();
  }

  unlike () {
    this.onUnlike.emit();
  }
}
