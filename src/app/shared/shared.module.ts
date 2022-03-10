import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AsyncWrapperComponent } from './components/async-wrapper/async-wrapper.component';
import { ContentWrapperComponent } from './components/content-wrapper/content-wrapper.component';
import { DeactivationDialog } from './components/deactivation/deactivation.dialog';
import { EmptyComponent } from './components/empty/empty.component';
import { ErrorComponent } from './components/error/error.component';
import { ListComponent } from './components/list/list.component';
import { LoadingOrErrorComponent } from './components/loading-or-error/loading-or-error.component';
import { LoadingComponent } from './components/loading/loading.component';
import { PreviewComponent } from './components/preview/preview.component';
import { RefreshComponent } from './components/refresh/refresh.component';
import { AgencyRangePipe } from './pipes/agency-range.pipe';
import { EmailControl } from './controls/email/email.control';
import { GenericControl } from './controls/generic/generic.control';

@NgModule({
  declarations: [
    LoadingComponent,
    ErrorComponent,
    EmptyComponent,
    RefreshComponent,
    PreviewComponent,
    LoadingOrErrorComponent,
    AsyncWrapperComponent,
    ListComponent,
    ContentWrapperComponent,
    AgencyRangePipe,
    DeactivationDialog,
    EmailControl,
    GenericControl,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    ReactiveFormsModule,
    LoadingComponent,
    ErrorComponent,
    EmptyComponent,
    RefreshComponent,
    PreviewComponent,
    LoadingOrErrorComponent,
    AsyncWrapperComponent,
    ListComponent,
    ContentWrapperComponent,
    AgencyRangePipe,
    DeactivationDialog,
    EmailControl,
    GenericControl,
  ],
})
export class SharedModule {}
