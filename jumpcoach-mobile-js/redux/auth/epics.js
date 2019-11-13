import { ofType } from "redux-observable";
import { Observable, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { map, switchMap, catchError } from "rxjs/operators";
import { signupSuccess, loginSuccess } from "./actionCreators";

const SERVER_URL = "http://localhost:4040";

export const signupEpic = action$ =>
  action$.pipe(
    ofType("SIGNUP_ATTEMPT"),
    switchMap(action =>
      ajax({
        url: `${SERVER_URL}/user`,
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: action.credentials
      }).pipe(
        map(response => signupSuccess(response.response.token)),
        catchError(error =>
          of({
            type: "COMPLETE_WORKOUT_REJECTED",
            payload: error,
            error: true
          })
        )
      )
    )
  );

export const loginEpic = action$ =>
  action$.pipe(
    ofType("LOGIN_ATTEMPT"),
    switchMap(action =>
      ajax({
        url: `${SERVER_URL}/auth/signin`,
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: action.credentials
      }).pipe(
        map(response => loginSuccess(response.response.token)),
        catchError(error =>
          of({
            type: "COMPLETE_WORKOUT_REJECTED",
            payload: error,
            error: true
          })
        )
      )
    )
  );
