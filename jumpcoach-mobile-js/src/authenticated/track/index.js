import { createStackNavigator } from "react-navigation-stack";
import TrackScreen from "./TrackScreen";
import EditVertScreen from "./EditVertScreen";
import AddVertScreen from "./AddVertScreen";
import PastWorkoutScreen from "./PastWorkoutScreen";
import PastWorkoutSummaryScreen from "./PastWorkoutSummaryScreen";

const TrackStack = createStackNavigator({
  Track: TrackScreen,
  EditVert: EditVertScreen,
  AddVert: AddVertScreen,
  PastWorkout: PastWorkoutScreen,
  PastWorkoutSummary: PastWorkoutSummaryScreen
});

export default TrackStack;
