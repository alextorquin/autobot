import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { environment } from '../../environments/environment';
import { SendUserMesage } from './store/state/global/global.actions';
import { Global, userMessageSelector } from './store/state/global/global.state';
import { RootState } from './store/state/root/root.state';

@Injectable({
  providedIn: 'root'
})
export class GlobalStoreService {
  private state: Global = { token: sessionStorage['token'], userMessage: 'AutoBot', loginNeeded: false };

  private token$ = new BehaviorSubject<string>(this.state.token);
  private loginNeeded$ = new BehaviorSubject<boolean>(this.state.loginNeeded);

  private readonly clearMessageDelayMs = environment.clearMessageDelayMs;

  constructor(private store: Store<RootState>) {}

  public selectToken$ = (): Observable<string> => this.token$.asObservable();
  public selectUserMessage$ = (): Observable<string> => this.store.select(userMessageSelector);
  public selectLoginNeeded$ = (): Observable<boolean> => this.loginNeeded$.asObservable();

  public dispatchToken = (token: string) => {
    this.state.token = token;
    sessionStorage['token'] = token;
    this.token$.next(this.state.token);
  };
  public dispatchUserMessage = (userMessage: string) => {
    this.store.dispatch(new SendUserMesage(userMessage));
    const subs = timer(this.clearMessageDelayMs).subscribe(() => {
      this.store.dispatch(new SendUserMesage(''));
      subs.unsubscribe();
    });
  };
  public dispatchLoginNeeded = (loginNeeded: boolean) => {
    this.state.loginNeeded = loginNeeded;
    this.loginNeeded$.next(this.state.loginNeeded);
  };
}
