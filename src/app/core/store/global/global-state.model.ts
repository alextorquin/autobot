export interface Global {
  token: string;
  userMessage: string;
  loginNeeded: boolean;
}

export const initialState: Global = { token: sessionStorage['token'], userMessage: 'Init AutoBot', loginNeeded: false };
