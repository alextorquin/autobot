import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, timer } from 'rxjs';
import { environment } from '../../environments/environment';
import { IsLoginNeeded, SendUserMesage, StoreToken } from './store/state/global/global.actions';
import { loginNeededSelector, tokenSelector, userMessageSelector } from './store/state/global/global.state';
import { RootState } from './store/state/root/root.state';
import { UniversalService } from './universal.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalStoreService {
  private readonly clearMessageDelayMs = environment.clearMessageDelayMs;

  constructor(private store: Store<RootState>, private universal: UniversalService) {
    const storedToken = this.universal.loadFromStorage('token');
    this.dispatchToken(storedToken);
  }

  public selectToken$ = (): Observable<string> => this.store.select(tokenSelector);
  public selectUserMessage$ = (): Observable<string> => this.store.select(userMessageSelector);
  public selectLoginNeeded$ = (): Observable<boolean> => this.store.select(loginNeededSelector);

  public dispatchToken = (token: string) => {
    this.universal.saveOnStorage('token', token);
    this.store.dispatch(new StoreToken(token));
  };
  public dispatchUserMessage = (userMessage: string) => {
    this.store.dispatch(new SendUserMesage(userMessage));
    if (userMessage === '') {
      return;
    }
    const subs = timer(this.clearMessageDelayMs).subscribe(() => {
      this.store.dispatch(new SendUserMesage(''));
      subs.unsubscribe();
    });
  };
  public dispatchLoginNeeded = (loginNeeded: boolean) => {
    this.store.dispatch(new IsLoginNeeded(loginNeeded));
  };
}
