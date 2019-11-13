import { ofType } from "redux-observable";
import { Observable, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { map, switchMap, catchError, debounceTime } from "rxjs/operators";
import { syncPastWorkoutsSuccess } from "./actionCreators";

const SERVER_URL = "http://localhost:4040";

export const syncPastWorkoutsEpic = (action$, state$) =>
  action$.pipe(
    ofType("SYNC_PAST_WORKOUTS_ATTEMPT"),
    debounceTime(1000),
    switchMap(action =>
      ajax({
        url: `${SERVER_URL}/complete/all`,
        method: "GET",
        headers: {
          "x-auth-token": state$.value.auth.token
        }
      }).pipe(
        map(response => syncPastWorkoutsSuccess(response.response)),
        catchError(error =>
          of({
            type: "SYNC_PAST_WORKOUTS_REJECTED",
            payload: error,
            error: true
          })
        )
      )
    )
  );
