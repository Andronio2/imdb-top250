import { createReducer, on } from '@ngrx/store';
import { ITopVideos } from 'src/app/share/models/video.model';
import { VideoActions } from '../actions/video.action';

const initialState: ITopVideos = {
  items: [],
  errorMessage: '',
};

export const videoReducer = createReducer(
  initialState,
  on(
    VideoActions.allVideoLoadedAction,
    (state, { videos }): ITopVideos => ({
      ...state,
      ...videos,
    }),
  ),
);
