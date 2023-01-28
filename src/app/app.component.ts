import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { LinkInjectorService } from './services/link-injector.service';

import { metaTags } from './metaTags';

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
    metaService.addTags(metaTags);

    linkInjector.createLink('canonical', 'https://reprogle.org');
    linkInjector.createLink('preconnect', 'https://fonts.google.com');
    linkInjector.createLink('preconnect', 'https://fonts.gstatic.com', true);
  }
}
