import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  LoginScreen,
  RegScreen,
  PostScreen,
  CreatePostScreen,
  Home,
} from "./Screens";

const MainStack = createStackNavigator();

export default function App() {
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
      </MainStack.Navigator>
      {/* <StatusBar style="auto" /> */}
    </NavigationContainer>
  );
}
