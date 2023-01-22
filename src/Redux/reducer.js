import * as actions from "./actionType";

const initialState = {
  Id: 0,
  authenticated: false,
  Name: "",
  Email: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SIGNED_IN:
      return {
        ...state,
        Id: action.payload.Id,
        Name: action.payload.Name,
        Email: action.payload.Email,
        authenticated: true,
      };
    case actions.SIGNED_OUT:
      return {
        ...state,
        Id: action.payload.Id,
        authenticated: false,
      };
    case actions.CHECK_TOKEN:
      if (localStorage.getItem("token") !== null) {
        console.log("Token found...");
        return {
          ...state,
          authenticated: true,
        };
      } else {
        return {
          ...state,
          authenticated: false,
        };
      }

    default:
      return state;
  }
};
export default reducer;
