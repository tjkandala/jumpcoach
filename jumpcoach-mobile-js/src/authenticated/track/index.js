import { createStackNavigator } from "react-navigation-stack";
import TrackScreen from "./TrackScreen";
import AddVertScreen from "./AddVertScreen";
import PastWorkoutScreen from "./PastWorkoutScreen";
import PastWorkoutSummaryScreen from "./PastWorkoutSummaryScreen";

const TrackStack = createStackNavigator({
  Track: TrackScreen,
  AddVert: AddVertScreen,
  PastWorkout: PastWorkoutScreen,
  PastWorkoutSummary: PastWorkoutSummaryScreen
});

export default TrackStack;
