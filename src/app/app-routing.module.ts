import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
  {
    path: 'agencies',
    loadChildren: () => import('./agencies/agencies.module').then((m) => m.AgenciesModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then((m) => m.RegisterModule),
  },
  { path: 'trips', loadChildren: () => import('./trips/trips.module').then((m) => m.TripsModule) },
  { path: 'labs', loadChildren: () => import('./labs/labs.module').then((m) => m.LabsModule) },
  {
    path: 'bookings',
    loadChildren: () => import('./bookings/bookings.module').then((m) => m.BookingsModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
