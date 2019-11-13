import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { AsyncStorage } from "react-native";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineEpics, createEpicMiddleware } from "redux-observable";

import { auth } from "./auth/reducer";
import { workout } from "./workout/reducer";
import { workoutHistory } from "./workoutHistory/reducer";
import { vertHistory } from "./vertHistory/reducer";
import { FAQ } from "./FAQ/reducer";
import { signupEpic, loginEpic } from "./auth/epics";
import {
  fetchWorkoutEpic,
  progressUpdateAttemptEpic,
  completeWorkoutAttemptEpic
} from "./workout/epics";
import { syncPastWorkoutsEpic } from "./workoutHistory/epics";

const rootEpic = combineEpics(
  signupEpic,
  loginEpic,
  fetchWorkoutEpic,
  progressUpdateAttemptEpic,
  completeWorkoutAttemptEpic,
  syncPastWorkoutsEpic
);

export const rootReducer = combineReducers({
  auth,
  workout,
  workoutHistory,
  vertHistory,
  FAQ
});

const epicMiddleware = createEpicMiddleware();

// Middleware: Redux Persist Config
const persistConfig = {
  // Root
  key: "root",
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: ["auth", "workout", "workoutHistory"],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: ["FAQ"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(epicMiddleware, createLogger()))
);

epicMiddleware.run(rootEpic);

// applyMiddleware(createLogger()) if needed

let persistor = persistStore(store);

export { store, persistor };
