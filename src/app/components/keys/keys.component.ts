import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { LinkInjectorService } from 'src/app/services/link-injector.service';

import { metaTags } from 'src/app/metaTags';

@Component({
  selector: 'app-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.css'],
})
export class KeysComponent {
  expanded: boolean = false;

  expandArrow = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  `;

  shrinkArrow = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.5 15.75l7.5-7.5 7.5 7.5"
      />
    </svg>
  `;

  constructor(
    private metaService: Meta,
    private titleService: Title,
    private linkInjector: LinkInjectorService
  ) {
    titleService.setTitle('Keys - Nate Reprogle');
    metaService.addTags(metaTags);

    linkInjector.createLink('canonical', 'https://reprogle.org');
    linkInjector.createLink('preconnect', 'https://fonts.google.com');
    linkInjector.createLink('preconnect', 'https://fonts.gstatic.com', true);
  }

  setState(state: boolean) {
    this.expanded = state;
  }
}
