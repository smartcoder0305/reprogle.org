import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { LinkInjectorService } from 'src/app/services/link-injector.service';

import { metaTags } from 'src/app/metaTags';
import { environment } from '../../../environments/environment';

type Message = {
  firstName: string;
  lastName: string;
  email: string;
  messageContent: string;
};

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  message: Message = {
    firstName: '',
    lastName: '',
    email: '',
    messageContent: '',
  };

  confirm = 'hidden';
  button = 'text_gradient mt-2 cursor-pointer rounded-md py-2 font-extrabold';

  turnstileState = 'error';

  environment = environment;
  resolveKey(event: string | null) {
    this.turnstileState = 'success';
    console.log(`Token received: ${event}`);
    console.warn(
      'This token has not been verified for accuracy, so it could be possible this token is a repeat or forgery.'
    );
  }

  constructor(
    private metaService: Meta,
    private titleService: Title,
    private linkInjector: LinkInjectorService
  ) {
    titleService.setTitle('Contact - Nate Reprogle');
    metaService.addTags(metaTags);

    linkInjector.createLink('canonical', 'https://reprogle.org');
    linkInjector.createLink('preconnect', 'https://fonts.google.com');
    linkInjector.createLink('preconnect', 'https://fonts.gstatic.com', true);
  }

  handleSubmit() {
    switch (this.turnstileState) {
      case 'error': {
        alert('Turnstile verification error. Please refresh and try again');
        break;
      }
      case 'expired': {
        alert('Turnstile verification expired. Please refresh and try again');
        break;
      }
      default: {
        // This will create a webhook to send to Discord. I was going to do email but webhooks were way easier
        const contents = {
          content: 'A new form has been submitted from reprogle.org',
          embeds: [
            {
              type: 'rich',
              color: 0x0d1260,
              title: `From ${this.message.firstName} ${this.message.lastName}`,
              description: this.message.messageContent,
              footer: {
                text: `Reply to ${this.message.email}`,
              },
            },
          ],
        };

        fetch(`${this.environment.webhook}`, {
          method: 'POST',
          body: JSON.stringify(contents),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        this.confirm = '';
        this.button = 'hidden';
      }
    }
  }
}
