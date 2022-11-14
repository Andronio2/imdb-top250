import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITopVideos } from 'src/app/share/models/video.model';

export namespace Selectors {
  export const selectVideosState = createFeatureSelector<ITopVideos>('video');

  export const selectVideo = createSelector(selectVideosState, (state) => state.items);
  export const selectError = createSelector(selectVideosState, (state) => state.errorMessage);
}
