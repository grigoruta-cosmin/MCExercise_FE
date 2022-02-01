import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  isVisible: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor() { }

  setVisibility(isVisible: boolean) {
    this.isVisible.next(isVisible);
  }

  getObservable() {
    return this.isVisible.asObservable();
  }
}
