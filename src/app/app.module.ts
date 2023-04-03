import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { KeysComponent } from './pages/keys/keys.component';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { ResumeItemComponent } from './components/resume-item/resume-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { PopupComponent } from './components/popup/popup.component';

import { NgxTurnstileModule } from 'ngx-turnstile';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import {
  provideRemoteConfig,
  getRemoteConfig,
} from '@angular/fire/remote-config';
import { NgOptimizedImage } from '@angular/common';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { markedOptionsFactory } from './services/markdown-factory';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
    BlogComponent,
    BlogPostComponent,
    BlogCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxTurnstileModule,
    FormsModule,
    NgOptimizedImage,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideRemoteConfig(() => getRemoteConfig()),
    MarkdownModule.forRoot({
      loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptionsFactory,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
