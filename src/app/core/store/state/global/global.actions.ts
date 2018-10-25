import { Action } from '@ngrx/store';

export enum GlobalActionTypes {
  SendUserMessage = '[Global] Show Message',
  IsLoginNeeded = '[Auth] Is Login Needed',
  StoreToken = '[Auth] Store Token',
  SetTitle = '[Router] Set Title'
}

export class SendUserMesage implements Action {
  readonly type = GlobalActionTypes.SendUserMessage;
  constructor(public payload: string) {}
}

export class IsLoginNeeded implements Action {
  readonly type = GlobalActionTypes.IsLoginNeeded;
  constructor(public payload: boolean) {}
}

export class StoreToken implements Action {
  readonly type = GlobalActionTypes.StoreToken;
  constructor(public payload: string) {}
}

export class SetTitle implements Action {
  readonly type = GlobalActionTypes.SetTitle;
  constructor(public payload: string) {}
}

export type GlobalActions = SendUserMesage | IsLoginNeeded | StoreToken | SetTitle;
