import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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

  public startIndex = 0;
  public endIndex = 10;
  public showOnPage = 10;

  ngOnInit(): void {
    this.store.dispatch(VideoActions.getTopVideoAction());
  }

  public onPage(event: PageEvent) {
    this.startIndex = event.pageIndex * event.pageSize;
    this.endIndex = this.startIndex + event.pageSize;
  }
}
