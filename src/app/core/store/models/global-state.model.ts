export interface GlobalState {
  token: string;
  userMessage: string;
  loginNeeded: boolean;
}

export const globalInitialState: GlobalState = { token: sessionStorage['token'], userMessage: 'AutoBot', loginNeeded: false };
