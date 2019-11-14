export const addVertDataAttempt = (maxVertical, chosenDate) => ({
  type: "ADD_VERT_DATA_ATTEMPT",
  maxVertical,
  chosenDate
});

export const deleteVertDataAttempt = index => ({
  type: "DELETE_VERT_DATA_ATTEMPT",
  index
});
