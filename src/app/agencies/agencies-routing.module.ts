import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgenciesRoutingModule {}
