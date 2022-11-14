import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IVideo } from 'src/app/share/models/video.model';

export namespace Selectors {
  export const selectVideosState = createFeatureSelector<IVideo>('video');

  export const selectVideo = createSelector(selectVideosState, (state) => state.items);
}
