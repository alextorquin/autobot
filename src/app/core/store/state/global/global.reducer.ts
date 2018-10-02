import { GlobalActions, GlobalActionTypes } from './global.actions';
import { Global, initialState } from './global.state';

export function reducer(state = initialState, action: GlobalActions): Global {
  switch (action.type) {
    case GlobalActionTypes.SendUserMessage:
      console.log(action);
      return { ...state, userMessage: action.payload };
    default:
      return state;
  }
}
