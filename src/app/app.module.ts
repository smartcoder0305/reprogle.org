import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeysComponent } from './components/keys/keys.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { ResumeItemComponent } from './components/resume-item/resume-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { PopupComponent } from './components/popup/popup.component';

import { NgxTurnstileModule } from 'ngx-turnstile';
import {
  NgxGoogleAnalyticsModule,
  NgxGoogleAnalyticsRouterModule,
} from 'ngx-google-analytics';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    KeysComponent,
    MainComponent,
    HeaderComponent,
    ResumeItemComponent,
    FooterComponent,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxTurnstileModule,
    FormsModule,
    NgxGoogleAnalyticsModule.forRoot('G-TFX3YYT899'),
    NgxGoogleAnalyticsRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
