import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmptyComponent } from './components/empty/empty.component';
import { ErrorComponent } from './components/error/error.component';
import { LoadingComponent } from './components/loading/loading.component';
import { RefreshComponent } from './components/refresh/refresh.component';

@NgModule({
  declarations: [LoadingComponent, ErrorComponent, EmptyComponent, RefreshComponent],
  imports: [CommonModule],
  exports: [LoadingComponent, ErrorComponent, EmptyComponent, RefreshComponent],
})
export class SharedModule {}
