import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { VideoService } from 'src/app/core/services/API/video.service';
import { VideoActions } from '../actions/video.action';

@Injectable()
export class VideoEffects {
  constructor(private actions$: Actions, private videoService: VideoService) {}

  loadTopVideos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VideoActions.getTopVideoAction),
      switchMap(() => this.videoService.getTopVideos()),
      map((videos) => VideoActions.allVideoLoadedAction({ videos })),
    ),
  );
}
