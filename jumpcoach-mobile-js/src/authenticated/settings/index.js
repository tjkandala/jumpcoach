import { createStackNavigator } from "react-navigation-stack";
import SettingsScreen from "./SettingsScreen";

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

export default SettingsStack;
