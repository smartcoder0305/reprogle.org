import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LinkInjectorService {
  constructor(@Inject(DOCUMENT) private doc: Document) {}

  createLink(rel: string, hrefString: string, crossOrigin?: boolean) {
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', rel);
    link.setAttribute('href', hrefString);
    crossOrigin ? link.setAttribute('crossorigin', '') : null;
    this.doc.head.appendChild(link);
  }

  removeLink(rel: string, hrefString: string) {
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', rel);
    link.setAttribute('href', hrefString);
    this.doc.head.removeChild(link);
  }
}
