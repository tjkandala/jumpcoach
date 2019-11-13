// x: date, y: max vertical

const initialState = [
  { x: new Date(2018, 9, 1), y: 24 },
  { x: new Date(2018, 9, 16), y: 32 },
  { x: new Date(2018, 9, 17), y: 24 },
  { x: new Date(2018, 10, 1), y: 30 },
  { x: new Date(2018, 10, 2), y: 35 },
  { x: new Date(2018, 10, 5), y: 42 }
];

export const vertHistory = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_VERT_DATA_ATTEMPT":
      console.log(action.standingVertical);
      console.log(action.maxVertical);
      return [
        ...state,
        {
          x: new Date(),
          y: action.maxVertical
        }
      ];
    default:
      return state;
  }
};
