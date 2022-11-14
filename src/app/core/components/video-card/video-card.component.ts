import { Component, Input } from '@angular/core';
import { IVideo } from 'src/app/share/models/video.model';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
})
export class VideoCardComponent {
  @Input() card!: IVideo;
}
