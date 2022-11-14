import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { VideoActions } from 'src/app/redux/actions/video.action';
import { Selectors } from 'src/app/redux/selectors/video.selectors';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private store: Store) {}
  public error$ = this.store.select(Selectors.selectError);
  public video$ = this.store.select(Selectors.selectVideo);

  ngOnInit(): void {
    this.store.dispatch(VideoActions.getTopVideoAction());
  }
}
