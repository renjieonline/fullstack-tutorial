import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Video } from './video';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap} from 'rxjs/operators';
import { environment } from 'src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private videoUrl = environment.baseUrl + '/youtube';
  videos = []

  constructor(
    private http: HttpClient
  ) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  getVideos () {
    return this.http.get<Video[]>(this.videoUrl, { observe: 'response' })
      .pipe(
        retry(3),
        catchError(this.handleError)
      )
  }

  addVideo (video: Video): Observable<Video> {
    console.log(video);
    return this.http.post(this.videoUrl, video, httpOptions)
      .pipe(
        tap((newVideo: Video) => console.log(`added video ${newVideo.url}`)),
        catchError(this.handleError)
      );
  }

  updateVideo (video: Video): Observable<Video> {
    const url = `${this.videoUrl}/${video.id}`;
    return this.http.put(url, video, httpOptions)
      .pipe(
        tap((video: Video) => console.log(`updated video ${video.url}`)),
        catchError(this.handleError)
      );
  }

  deleteVideo (id: number): Observable<Video> {
    const url = `${this.videoUrl}/${id}`;
    return this.http.delete<Video>(url, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
}
