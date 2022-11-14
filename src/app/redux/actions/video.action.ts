import { createAction, props } from '@ngrx/store';
import { IVideo } from 'src/app/share/models/video.model';

export namespace VideoActions {
  export const getTopVideoAction = createAction('[VIDEO] Get top 250 video');
  export const allVideoLoadedAction = createAction(
    '[VIDEO] All videos loaded',
    props<{ videos: IVideo }>(),
  );
}
