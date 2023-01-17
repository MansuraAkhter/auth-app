import * as actions from "./actionType";

export function signedIn(Id) {
  return {
    type: actions.SIGNED_IN,
    payload: {
      Id,
    },
  };
}

export function signedOut(Id) {
  return {
    type: actions.SIGNED_OUT,
    payload: {
      Id,
    },
  };
}
