// x: date, y: max vertical

const initialState = [
  { x: new Date(2019, 7, 1), y: 32 },
  { x: new Date(2019, 8, 1), y: 36 },
  { x: new Date(2019, 9, 1), y: 24 },
  { x: new Date(2019, 9, 16), y: 42 }
];

//   { x: new Date(2019, 7, 1), y: 42 },

export const vertHistory = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_VERT_DATA_ATTEMPT":
      state.push({
        x: action.chosenDate,
        y: action.maxVertical
      });

      state.sort((a, b) => a.x - b.x);

      return [...state];

    case "DELETE_VERT_DATA_ATTEMPT":
      state.splice(action.index, 1);

      return [...state];
    default:
      return state;
  }
};
