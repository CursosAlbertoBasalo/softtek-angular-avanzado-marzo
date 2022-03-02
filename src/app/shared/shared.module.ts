import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { ErrorComponent } from './error/error.component';
import { EmptyComponent } from './empty/empty.component';
import { RefreshComponent } from './refresh/refresh.component';

@NgModule({
  declarations: [LoadingComponent, ErrorComponent, EmptyComponent, RefreshComponent],
  imports: [CommonModule],
  exports: [LoadingComponent, ErrorComponent, EmptyComponent, RefreshComponent],
})
export class SharedModule {}
