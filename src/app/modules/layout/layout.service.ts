import { Injectable, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  menuState = new BehaviorSubject(false);
  constructor( ) { }

  changeMenuState(state: boolean) {
    this.menuState.next(state);
  }
}
