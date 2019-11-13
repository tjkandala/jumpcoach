export const fetchWorkout = (
  readiness = 0,
  equipment = true,
  advanced = true
) => {
  const beginner = !advanced;

  return {
    type: "WORKOUT_FETCH",
    preferences: {
      readiness,
      equipment,
      beginner
    }
  };
};

export const receivedWorkout = workout => ({
  type: "WORKOUT_RECEIVED",
  workout
});

export const quitWorkout = () => ({ type: "QUIT_WORKOUT" });

// update progress by exercise set. debounce in epic
export const progressUpdateAttempt = (exerciseId, set, note) => ({
  type: "PROGRESS_UPDATE_ATTEMPT",
  exerciseId,
  set,
  note
});

export const progressUpdate = (exerciseId, set, note) => ({
  type: "PROGRESS_UPDATE",
  exerciseId,
  set,
  note
});

export const completeWorkoutAttempt = () => ({
  type: "COMPLETE_WORKOUT_ATTEMPT"
});

export const confirmWorkoutSummary = () => ({
  type: "CONFIRM__WORKOUT_SUMMARY"
});
