import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmptyComponent } from './components/empty/empty.component';
import { ErrorComponent } from './components/error/error.component';
import { LoadingComponent } from './components/loading/loading.component';
import { RefreshComponent } from './components/refresh/refresh.component';
import { PreviewComponent } from './components/preview/preview.component';
import { LoadingOrErrorComponent } from './components/loading-or-error/loading-or-error.component';
import { AsyncWrapperComponent } from './components/async-wrapper/async-wrapper.component';
import { ListComponent } from './components/list/list.component';
import { ContentWrapperComponent } from './components/content-wrapper/content-wrapper.component';
import { AgencyRangePipe } from './pipes/agency-range.pipe';
import { DeactivationDialog } from './components/deactivation/deactivation.dialog';

@NgModule({
  declarations: [LoadingComponent, ErrorComponent, EmptyComponent, RefreshComponent, PreviewComponent, LoadingOrErrorComponent, AsyncWrapperComponent, ListComponent, ContentWrapperComponent, AgencyRangePipe, DeactivationDialog],
  imports: [CommonModule],
  exports: [LoadingComponent, ErrorComponent, EmptyComponent, RefreshComponent, PreviewComponent, LoadingOrErrorComponent, AsyncWrapperComponent, ListComponent, ContentWrapperComponent, AgencyRangePipe, DeactivationDialog],
})
export class SharedModule {}
