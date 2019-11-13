import { createSelector } from "reselect";
import { create } from "uuid-js";

// input selectors
const exercisesSelector = state => state.workout.workout;

// selectors
export const explosiveExerciseSelector = createSelector(
  exercisesSelector,
  exercises => exercises.filter(exercise => exercise.genre === "explosive")
);

export const strengthExerciseSelector = createSelector(
  exercisesSelector,
  exercises => exercises.filter(exercise => exercise.genre === "strength")
);

export const coreExerciseSelector = createSelector(
  exercisesSelector,
  exercises => exercises.filter(exercise => exercise.genre === "core")
);

const initialState = {
  workingOut: false,
  workout: [],
  progress: {}
};

// reducer
export const workout = (state = initialState, action) => {
  switch (action.type) {
    case "WORKOUT_FETCH":
      console.log("got fetch workout action");
      return state;
    case "WORKOUT_FETCH_REJECTED":
      console.log(action);
      return state;
    case "WORKOUT_RECEIVED":
      const progressArray = action.workout.map(exercise => ({
        name: exercise.name,
        recordedSets: [],
        exercise: exercise._id
      }));

      return {
        workingOut: true,
        workout: action.workout,
        progress: progressArray
      };

    case "PROGRESS_UPDATE":
      console.log(action.note);

      const nextState = JSON.parse(JSON.stringify(state));

      const modifiedIndex = nextState.progress
        .map(x => x.exercise)
        .indexOf(action.exerciseId);

      nextState.progress[modifiedIndex].recordedSets[action.set] = action.note;

      return nextState;

    case "COMPLETE_WORKOUT_SUCCESS":
      return initialState;

    case "COMPLETE_WORKOUT_REJECTED":
      console.log(action.error);
      return state;

    case "CONFIRM__WORKOUT_SUMMARY":
      return state;

    case "QUIT_WORKOUT":
      return initialState;
    default:
      return state;
  }
};
