import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HostingComponent } from './pages/hosting/hosting.component';
import { TermsConditionComponent } from './pages/terms-condition/terms-condition.component';
import { FrequentsQuestionsComponent } from './pages/frequents-questions/frequents-questions.component';
import { DataProtectionComponent } from './pages/data-protection/data-protection.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ComunidadComponent } from './pages/comunidad/comunidad.component';
import { JobsComponent } from './pages/jobs/jobs.component';

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
    component: HostingComponent,
    canActivate: [AuthGuard],
    data: { authGuardPipe : redirectUnauthorizedToLogin }
  },
  {
    path: 'jobs',
    component: JobsComponent,

  },
  {
    path:'comunidad',
    component:ComunidadComponent
  },
  {
    path: 'terms',
    component: TermsConditionComponent
  },
  {
    path: 'frequents',
    component: FrequentsQuestionsComponent
  },
  {
    path: 'data-protection',
    component: DataProtectionComponent,
  },
  {
    path:'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    data: { authGuardPipe : redirectUnauthorizedToLogin }
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
