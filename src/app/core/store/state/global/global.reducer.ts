import { GlobalActions, GlobalActionTypes } from './global.actions';
import { Global, initialState } from './global.state';

export function reducer(state = initialState, action: GlobalActions): Global {
  switch (action.type) {
    case GlobalActionTypes.SendUserMessage:
      return { ...state, userMessage: action.payload };
    case GlobalActionTypes.IsLoginNeeded:
      return { ...state, loginNeeded: action.payload };
    case GlobalActionTypes.StoreToken:
      return { ...state, token: action.payload };
    case GlobalActionTypes.SetTitle:
      return { ...state, title: action.payload };
    default:
      return state;
  }
}
