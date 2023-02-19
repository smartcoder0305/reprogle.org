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
  async resolveKey(event: string | null) {
    this.turnstileState = 'success';

    console.log(`Token received: ${event}`);
    const result = await fetch(`${this.environment.apiurl}/verify-turnstile`, {
      body: JSON.stringify({ token: event }),
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
    });

    const outcome = await result.json();
    if (outcome.success) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.turnstileState = event!;
    } else {
      this.turnstileState = 'error';
    }
  }

  constructor(
    metaService: Meta,
    titleService: Title,
    linkInjector: LinkInjectorService
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
          firstName: this.message.firstName,
          lastName: this.message.lastName,
          email: this.message.email,
          message: this.message.messageContent,
        };

        fetch(`${this.environment.apiurl}/discord`, {
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
