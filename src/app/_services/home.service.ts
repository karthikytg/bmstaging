import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private authStatusListener = new BehaviorSubject<boolean>(true);
  private navShowListener = new BehaviorSubject<boolean>(true);
  constructor() { }
  getAuthStatusListener(){
    return this.authStatusListener.asObservable();
  }
  getNavShowListener() {
    return this.navShowListener.asObservable();
  }
  hideNav() {
    this.navShowListener.next(false);
  }
  showNav() {
    this.navShowListener.next(true);
  }
  makeYellow() {
    this.authStatusListener.next(false);
  }
  makeBlue() {
    this.authStatusListener.next(true);
  }
}
