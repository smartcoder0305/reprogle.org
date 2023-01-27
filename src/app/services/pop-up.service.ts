import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PopUpService {
  public popUpOpen: boolean = false;

  constructor() {}

  setPopUp(state: boolean): boolean {
    return (this.popUpOpen = state);
  }
}
