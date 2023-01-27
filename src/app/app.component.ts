import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { LinkInjectorService } from './services/link-injector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'reprogle.org';

  constructor(
    private metaService: Meta,
    private titleService: Title,
    private linkInjector: LinkInjectorService
  ) {
    titleService.setTitle('Home - Nate Reprogle');
    metaService.addTags([
      {
        name: 'description',
        content:
          'The website for Nate Reprogle. Nate is an IT Enthusiast with a career in Contact Centers based in Arkansas.',
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'og:locale', content: 'en_US' },
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: 'Home - Nate Reprogle' },
      {
        name: 'og:description',
        content:
          'The website for Nate Reprogle. Nate is an IT Enthusiast with a career in Contact Centers based in Arkansas.',
      },
      { name: 'og:url', content: 'https://reprogle.org' },
      { name: 'og:site_name', content: 'Nate Reprogle' },
      { name: 'article:modified_time', content: '2022-10-29T15:18:00+00:00' },
      { name: 'og:image', content: 'https://reprogle.org/assets/Profile.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@NateReprogle' },
      { name: 'twitter:creator', content: '@NateReprogle' },
      { name: 'twitter:title', content: 'Home - Nate Reprogle' },
      {
        name: 'twitter:description',
        content:
          'The website for Nate Reprogle. Nate is an IT Enthusiast with a career in Contact Centers based in Arkansas.',
      },
      {
        name: 'twitter:image',
        content: 'https://reprogle.org/assets/Profile.jpg',
      },
    ]);

    linkInjector.createLink('canonical', 'https://reprogle.org');
    linkInjector.createLink('preconnect', 'https://fonts.google.com');
    linkInjector.createLink('preconnect', 'https://fonts.gstatic.com', true);
  }
}
