import { GlobalActions, GlobalActionTypes } from './global.actions';
import { GlobalState, initialState } from './global.state';

export function globalReducer(state = initialState, action: GlobalActions): GlobalState {
  switch (action.type) {
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
