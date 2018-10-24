import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniversalService {
  constructor(@Inject(PLATFORM_ID) private platformId: string) {}
  public isBrowser() {
    return isPlatformBrowser(this.platformId);
  }

  public isServer() {
    return isPlatformServer(this.platformId);
  }

  public saveOnStorage(key, value) {
    if (this.isBrowser()) {
      sessionStorage.setItem(key, value);
    } else {
    }
  }
  public loadFromStorage(key) {
    if (this.isBrowser()) {
      sessionStorage.getItem(key);
    } else {
      return null;
    }
  }
}
