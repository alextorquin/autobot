import { Action } from '@ngrx/store';

export enum GlobalActionTypes {
  SendUserMessage = '[Global] Show Message'
}

export class SendUserMesage implements Action {
  readonly type = GlobalActionTypes.SendUserMessage;
  constructor(public payload: string) {}
}

export type GlobalActions = SendUserMesage;
