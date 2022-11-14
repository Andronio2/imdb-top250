import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IVideo } from 'src/app/share/models/video.model';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  constructor(private http: HttpClient) {}

  public getTopVideos(): Observable<IVideo> {
    const url = 'Top250Movies';
    return this.http.get<IVideo>(url).pipe(
      catchError(() =>
        of({
          errorMessage: 'Server Error',
          items: [],
        }),
      ),
    );
  }
}
