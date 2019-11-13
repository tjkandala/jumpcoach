// state is where the "articles" are stored

const initialState = {
  allIds: [
    "How do I use JumpCoach?",
    "How should I recover from JumpCoach workouts?",
    "What should I do for my upper body?",
    "Why do I have to squat every workout?"
  ],
  byId: {
    "How do I use JumpCoach?": {
      content: "How do I use JumpCoach?"
    },
    "How should I recover from JumpCoach workouts?": {
      content: "How should I recover from JumpCoach workouts?"
    },
    "What should I do for my upper body?": {
      content:
        "You should hit your upper body as hard as you hit your lower body. However, you don't need to be huge up top to jump high. This is why JumpCoach doesn't prescribe an upper body training routine. Bascially any PPL (Push Pull Legs) or Upper/Lower split will satisfy your upper body training needs. Simply swap the lower body workouts with JumpCoach workouts."
    },
    "Why do I have to squat every workout?": {
      content: "Why do I have to squat every workout?"
    }
  }
};

export const FAQ = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
