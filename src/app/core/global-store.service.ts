import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { environment } from '../../environments/environment';
import { Global } from './store/global/global-state.model';
import { SendUserMesage } from './store/global/global.actions';
import { State } from './store/state';

@Injectable({
  providedIn: 'root'
})
export class GlobalStoreService {
  private state: Global = { token: sessionStorage['token'], userMessage: 'AutoBot', loginNeeded: false };

  private token$ = new BehaviorSubject<string>(this.state.token);
  // private userMessage$ = new BehaviorSubject<string>(this.state.userMessage);
  private loginNeeded$ = new BehaviorSubject<boolean>(this.state.loginNeeded);

  private readonly clearMessageDelayMs = environment.clearMessageDelayMs;

  constructor(private store: Store<State>) {}

  public selectToken$ = (): Observable<string> => this.token$.asObservable();
  // public selectUserMessage$ = (): Observable<string> => this.userMessage$.asObservable();
  public selectLoginNeeded$ = (): Observable<boolean> => this.loginNeeded$.asObservable();

  public dispatchToken = (token: string) => {
    this.state.token = token;
    sessionStorage['token'] = token;
    this.token$.next(this.state.token);
  };
  public dispatchUserMessage = (userMessage: string) => {
    this.store.dispatch(new SendUserMesage(userMessage));
    // this.state.userMessage = userMessage;
    // this.userMessage$.next(this.state.userMessage);
    const subs = timer(this.clearMessageDelayMs).subscribe(() => {
      // this.store.dispatch(new SendUserMesage(''));
      // this.state.userMessage = '';
      // this.userMessage$.next(this.state.userMessage);
      subs.unsubscribe();
    });
  };
  public dispatchLoginNeeded = (loginNeeded: boolean) => {
    this.state.loginNeeded = loginNeeded;
    this.loginNeeded$.next(this.state.loginNeeded);
  };
}
