import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import {
  LoginScreen,
  RegScreen,
  Home,
  MapScreen,
  CommentsScreen,
} from "./Screens";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Reg">
        <MainStack.Screen
          options={{
            headerShown: false,
          }}
          name="SignUp"
          component={RegScreen}
        />
        <MainStack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen}
        />
        <MainStack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />

        <MainStack.Screen
          options={{
            title: "Comments",
            headerTitleAlign: "center",
          }}
          name="Comments"
          component={CommentsScreen}
        />
        <MainStack.Screen
          options={{
            title: "Map",
            headerTitleAlign: "center",
          }}
          name="Map"
          component={MapScreen}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
