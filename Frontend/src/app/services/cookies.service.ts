import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor() { }

  value$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  setCookiesConfig() {
    localStorage.setItem('cookiesConfig', 'true');
    this.value$.next(true);
  }

  getCookiesConfig(): Observable<boolean> {
    let cookiesConfig = localStorage.getItem('cookiesConfig');
    if (cookiesConfig == 'true') {
      this.value$.next(true);
    } else {
      this.value$.next(false);
    }
    return this.value$.asObservable();
  }

}
