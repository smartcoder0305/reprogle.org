import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent implements OnInit, OnDestroy {
  popupOpen: boolean = true;

  @Input() redirectTitle: string = 'Title';
  @Input() redirectLink: string = 'https://example.com';
  @Input() message: string = 'Message';
  @Input() redirectTime: number = 7;

  @Output() stateChange = new EventEmitter<boolean>();

  public timeLeft: number = this.redirectTime;

  private subscription: Subscription | undefined;

  emitStateChange(state: boolean) {
    this.stateChange.emit(state);
  }

  ngOnInit(): void {
    this.subscription = interval(1000).subscribe((x) => {
      // We're subtracting 1 because the interval timer doesn't start until after 1 second, so in reality it takes 2 seconds to show any meaning
      this.timeLeft = this.redirectTime - x - 1;
      if (this.timeLeft === 0) {
        window.location.replace(this.redirectLink);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  stopPropogation(event: MouseEvent) {
    event.stopPropagation();
  }
}
