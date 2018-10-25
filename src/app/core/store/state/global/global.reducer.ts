import { GlobalActions, GlobalActionTypes } from './global.actions';
import { Global, initialState } from './global.state';

export function globalReducer(state = initialState, action: GlobalActions): Global {
  switch (action.type) {
    case GlobalActionTypes.ClearUserMessage:
      return { ...state, userMessage: action.payload };
    case GlobalActionTypes.SendUserMessage:
      return { ...state, userMessage: action.payload };
    case GlobalActionTypes.IsLoginNeeded:
      return { ...state, loginNeeded: action.payload };
    case GlobalActionTypes.StoreToken:
      return { ...state, token: action.payload };
    default:
      return state;
  }
}
