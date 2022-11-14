import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './services/API/interceptor.service';
import { MainComponent } from './pages/main/main.component';
import { VideoCardComponent } from './components/video-card/video-card.component';

@NgModule({
  declarations: [MainComponent, VideoCardComponent],
  imports: [CommonModule, ShareModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  exports: [MainComponent],
})
export class CoreModule {}
