import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuardModule } from '@angular/fire/auth-guard';

import { SwiperModule } from 'swiper/angular';
import { DialogModule } from '@angular/cdk/dialog';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LandingComponent } from './pages/landing/landing.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BannerComponent } from './components/banner/banner.component';
import { ServicesComponent } from './components/services/services.component';
import { CardComponent } from './components/card/card.component';
import { AboutComponent } from './components/about/about.component';
import { SlidesComponent } from './components/slides/slides.component';
import { HostingComponent } from './pages/hosting/hosting.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { CouchsurfingAdComponent } from './components/couchsurfing-ad/couchsurfing-ad.component';
import { CouchsurfingCardComponent } from './components/couchsurfing-card/couchsurfing-card.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { TermsConditionComponent } from './pages/terms-condition/terms-condition.component';
import { FrequentsQuestionsComponent } from './pages/frequents-questions/frequents-questions.component';
import { DataProtectionComponent } from './pages/data-protection/data-protection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './pages/profile/profile.component';
import { ComunidadComponent } from './pages/comunidad/comunidad.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FormComponent,
    LoginComponent,
    RegisterComponent,
    LandingComponent,
    BannerComponent,
    ServicesComponent,
    CardComponent,
    AboutComponent,
    SlidesComponent,
    HostingComponent,
    HotelsComponent,
    CouchsurfingAdComponent,
    CouchsurfingCardComponent,
    TermsConditionComponent,
    FrequentsQuestionsComponent,
    DataProtectionComponent,
    ProfileComponent,
    ComunidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SwiperModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    AuthGuardModule,
    DialogModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
