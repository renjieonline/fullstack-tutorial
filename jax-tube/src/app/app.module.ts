import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { PlayerComponent } from './player/player.component';
import { ControlsComponent } from './controls/controls.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddVideoComponent } from './add-video/add-video.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoPlayerComponent,
    PlayerComponent,
    ControlsComponent,
    PlaylistComponent,
    AddVideoComponent
  ],
  imports: [
    NgbModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
