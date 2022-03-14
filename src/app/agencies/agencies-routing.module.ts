import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from '@core/authenticated.guard';
import { AgenciesComponent } from './agencies.component';
import { AgenciesResolver } from './agencies.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: {
      agencies: AgenciesResolver,
    },
    component: AgenciesComponent,
  },
  {
    path: 'new',
    canLoad: [AuthenticatedGuard],
    loadChildren: () => import('./new/new.module').then((m) => m.NewModule),
  },
  { path: ':id', loadChildren: () => import('./agency/agency.module').then((m) => m.AgencyModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgenciesRoutingModule {}
