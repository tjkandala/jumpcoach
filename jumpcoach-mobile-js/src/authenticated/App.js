import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import TrackStack from "./track";
import WorkOutStack from "./workout";
import FAQStack from "./FAQ";
import SettingsStack from "./settings";

const TabNavigator = createBottomTabNavigator(
  {
    "Work Out": WorkOutStack,
    Track: TrackStack,
    FAQ: FAQStack,
    Settings: SettingsStack
  },
  {
    tabBarOptions: {
      activeTintColor: "#fff",
      labelStyle: {
        fontSize: 12
      },
      style: {
        backgroundColor: "#26262B",
        borderTopColor: "transparent"
      }
    }
  }
);

export default createAppContainer(TabNavigator);
