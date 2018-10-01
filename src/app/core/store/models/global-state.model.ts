import { Global } from '../global/global-state.model';

export const globalInitialState: Global = { token: sessionStorage['token'], userMessage: 'AutoBot', loginNeeded: false };
