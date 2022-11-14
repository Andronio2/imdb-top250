import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginatorPipe } from './pipe/paginator.pipe';

const MaterialComponents = [MatIconModule, MatCardModule, MatPaginatorModule];
@NgModule({
  declarations: [PaginatorPipe],
  imports: [CommonModule, ...MaterialComponents],
  exports: [...MaterialComponents, PaginatorPipe],
})
export class ShareModule {}
