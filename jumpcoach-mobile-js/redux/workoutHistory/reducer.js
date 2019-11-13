import { createSelector } from "reselect";

// input selectors
const completedWorkoutsSelector = state => state.workoutHistory;

export const selectCompletedWorkouts = createSelector(
  completedWorkoutsSelector,
  completedWorkouts => completedWorkouts
);

const initialState = [];

// reducer
export const workoutHistory = (state = initialState, action) => {
  switch (action.type) {
    case "COMPLETE_WORKOUT_SUCCESS":
      return [...state, action.completedWorkout];

    case "SYNC_PAST_WORKOUTS_ATTEMPT":
      return state;

    case "SYNC_PAST_WORKOUTS_SUCCESS":
      return [...action.workoutHistory];

    case "SYNC_PAST_WORKOUTS_REJECTED":
      console.log(action.error);
      return state;

    default:
      return state;
  }
};
