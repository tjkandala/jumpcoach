import { ofType } from "redux-observable";
import { Observable, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { map, switchMap, catchError, debounceTime } from "rxjs/operators";
import { receivedWorkout, progressUpdate } from "./actionCreators";

const SERVER_URL = "http://localhost:4040";

export const fetchWorkoutEpic = action$ =>
  action$.pipe(
    ofType("WORKOUT_FETCH"),
    switchMap(action =>
      ajax({
        url: `${SERVER_URL}/generate/`,
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: action.preferences
      }).pipe(
        map(response => receivedWorkout(response.response)),
        catchError(error =>
          of({
            type: "WORKOUT_FETCH_REJECTED",
            payload: error,
            error: true
          })
        )
      )
    )
  );

export const progressUpdateAttemptEpic = action$ =>
  action$.pipe(
    ofType("PROGRESS_UPDATE_ATTEMPT"),
    debounceTime(600),
    map(action => progressUpdate(action.exerciseId, action.set, action.note))
  );

export const completeWorkoutAttemptEpic = (action$, state$) =>
  action$.pipe(
    ofType("COMPLETE_WORKOUT_ATTEMPT"),
    switchMap(action =>
      ajax({
        url: `${SERVER_URL}/complete`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": state$.value.auth.token
        },
        body: {
          progress: state$.value.workout.progress
        }
      }).pipe(
        map(response => ({
          type: "COMPLETE_WORKOUT_SUCCESS",
          completedWorkout: response.response
        })),
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
