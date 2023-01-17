import * as actions from "./actionType";

const initialState = {
  Id: 0,
  authenticated: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SIGNED_IN:
      return {
        ...state,
        Id: action.payload.Id,
        authenticated: true,
      };
    case actions.SIGNED_OUT:
      return {
        ...state,
        Id: action.payload.Id,
        authenticated: false,
      };
    default:
      return state;
  }
};
export default reducer;
