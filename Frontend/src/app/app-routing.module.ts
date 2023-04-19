import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HostingComponent } from './pages/hosting/hosting.component';
import { TermsConditionComponent } from './pages/terms-condition/terms-condition.component';
import { DataProtectionComponent } from './pages/data-protection/data-protection.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ComunidadComponent } from './pages/comunidad/comunidad.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { JobOffersComponent } from './components/job-offers/job-offers.component';
import { JobPortalsComponent } from './components/job-portals/job-portals.component';
import { EventsComponent } from './components/events/events.component';
import { ForumComponent } from './components/forum/forum.component';
import { InfoComponent } from './pages/info/info.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AuthGuard } from './guards/auth.guard';
import { GalletitasComponent } from './pages/galletitas/galletitas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: 'landing',
    component: LandingComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'alojamiento',
    component: HostingComponent
  },
  {
    path: 'jobs',
    component: JobsComponent,
    children: [
      {
        path: '',
        redirectTo: 'ofertas',
        pathMatch: 'full'
      },
      {
        path: 'ofertas',
        component: JobOffersComponent
      },
      {
        path: 'portales',
        component: JobPortalsComponent
      }
    ]
  },
  {
    path:'comunidad',
    component:ComunidadComponent,
    children: [
      {
        path: '',
        redirectTo: 'eventos',
        pathMatch: 'full'
      },
      {
        path: 'eventos',
        component: EventsComponent
      },
      {
        path: 'foros',
        component: ForumComponent
      }
    ]
  },
  {
    path:'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'info',
    component: InfoComponent,
    children: [
      {
        path: '',
        redirectTo: 'terms',
        pathMatch: 'full'
      },
      {
        path: 'terms',
        component: TermsConditionComponent
      },
      {
        path: 'data-protection',
        component: DataProtectionComponent,
      },
      {
        path: 'cookies',
        component: GalletitasComponent
      }
    ]
  },
  {
    path: 'acerca-de-nosotros',
    component: AboutUsComponent
  },
  {
    path: '**',
    redirectTo: 'landing',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
