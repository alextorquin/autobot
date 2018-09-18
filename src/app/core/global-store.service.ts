import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalStoreService {
  private state = { token: '', userMessage: '', loginNeeded: false }; // Global = globalInitialState;

  private token$ = new BehaviorSubject<string>(this.state.token);
  private userMessage$ = new BehaviorSubject<string>(this.state.userMessage);
  private loginNeeded$ = new BehaviorSubject<boolean>(this.state.loginNeeded);

  private readonly clearMessageDelayMs = 3000;

  constructor() {}

  public selectToken$ = (): Observable<string> => this.token$.asObservable();
  public selectUserMessage$ = (): Observable<string> => this.userMessage$.asObservable();
  public selectLoginNeeded$ = (): Observable<boolean> => this.loginNeeded$.asObservable();

  public dispatchToken = (token: string) => {
    this.state.token = token;
    this.token$.next(this.state.token);
  };
  public dispatchUserMessage = (userMessage: string) => {
    this.state.userMessage = userMessage;
    this.userMessage$.next(this.state.userMessage);
    timer(this.clearMessageDelayMs).subscribe(() => {
      this.state.userMessage = '';
      this.userMessage$.next(this.state.userMessage);
    });
  };
  public dispatchLoginNeeded = (loginNeeded: boolean) => {
    this.state.loginNeeded = loginNeeded;
    this.loginNeeded$.next(this.state.loginNeeded);
  };
}
