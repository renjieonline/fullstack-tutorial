import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() currentVideo: Video;

  @Output() onUpdateProgressBar = new EventEmitter();

  @ViewChild('player', { static: true }) player: ElementRef;

  constructor() { }

  ngOnInit() {}

  updateProgressBar () {
    this.onUpdateProgressBar.emit()
  }
}
