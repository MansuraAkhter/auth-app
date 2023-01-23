import * as actions from "./actionType";

export function signedIn(Id, Name, Email) {
  return {
    type: actions.SIGNED_IN,
    payload: {
      Id,
      Name,
      Email,
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

// export function checkToken() {
//   return {
//     type: actions.CHECK_TOKEN,
//     payload: {},
//   };
// }
