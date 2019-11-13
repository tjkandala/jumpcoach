import { createStackNavigator } from "react-navigation-stack";
import WorkoutGeneratorScreen from "./WorkoutGeneratorScreen";
import WarmupScreen from "./WarmupScreen";
import ExplosiveScreen from "./ExplosiveScreen";
import StrengthScreen from "./StrengthScreen";
import CoreScreen from "./CoreScreen";
import SummaryScreen from "./SummaryScreen";

// ADD WARMUP SCREEN PLS!!!

const WorkOutStack = createStackNavigator({
  WorkoutGenerator: WorkoutGeneratorScreen,
  Warmup: WarmupScreen,
  Explosive: ExplosiveScreen,
  Strength: StrengthScreen,
  Core: CoreScreen,
  Summary: SummaryScreen
});

export default WorkOutStack;
