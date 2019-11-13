export const syncPastWorkouts = () => ({
  type: "SYNC_PAST_WORKOUTS_ATTEMPT"
});

export const syncPastWorkoutsSuccess = workoutHistory => ({
  type: "SYNC_PAST_WORKOUTS_SUCCESS",
  workoutHistory
});
