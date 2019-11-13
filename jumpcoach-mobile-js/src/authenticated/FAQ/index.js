import { createStackNavigator } from "react-navigation-stack";
import FAQScreen from "./FAQScreen";
import ArticleScreen from "./ArticleScreen";

const FAQStack = createStackNavigator(
  {
    FAQ: FAQScreen,
    Article: ArticleScreen
  },
  {
    initialRouteName: "FAQ"
  }
);

export default FAQStack;
