const initialState = [
  {
    date: new Date(),
    standingVertical: 34,
    maxVertical: 41
  }
];

export const vertHistory = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_VERT_DATA_ATTEMPT":
      console.log(action.standingVertical);
      console.log(action.maxVertical);
      return [
        ...state,
        {
          date: new Date(),
          standingVertical: action.standingVertical,
          maxVertical: action.maxVertical
        }
      ];
    default:
      return state;
  }
};
