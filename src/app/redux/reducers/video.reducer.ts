import { createReducer, on } from '@ngrx/store';
import { IVideo } from 'src/app/share/models/video.model';
import { VideoActions } from '../actions/video.action';

export const initialState: IVideo = {
  items: [],
  errorMessage: '',
};

export const videoReducer = createReducer(
  initialState,
  on(
    VideoActions.allVideoLoadedAction,
    (state, { videos }): IVideo => ({
      ...state,
      ...videos,
    }),
  ),
);
