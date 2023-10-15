import { TouchableOpacity, StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, AntDesign } from "@expo/vector-icons";

import { CreatePostScreen } from "../CreatePostScreen";
import { PostScreen } from "../PostScreen/PostScreen";

import { header, headerTitle, plusIcon, iconsTab } from "./HomeStyles";
import { ProfileScreen } from "../ProfileScreen";

const Tabs = createBottomTabNavigator();

export const Home = ({ navigation }) => {
  return (
    <Tabs.Navigator
      initialRouteName="Posts"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerTitleAlign: "center",
        headerStyle: header,
        headerTitleStyle: headerTitle,
        tabBarStyle: {
          justifyContent: "center",
          alignItems: "center",
          height: 83,
          borderTopWidth: 1,
          borderTopColor: "#bdbdbd",
        },
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === "Posts") {
            iconName = "grid";
          }
          if (route.name === "CreatePost") {
            iconName = "plus";
          }
          if (route.name === "Profile") {
            iconName = "user";
          }
          return (
            <View
              style={{
                ...iconsTab,
                backgroundColor: focused ? "#FF6C00" : "#FFFFFF",
              }}
            >
              <Feather
                name={iconName}
                size={24}
                color={focused ? "#FFFFFF" : "#212121"}
              />
            </View>
          );
        },
      })}
    >
      <Tabs.Screen
        name="Posts"
        component={PostScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={{ marginRight: 16 }}
            >
              <Feather name="log-out" size={24} color="#bdbdbd" />
            </TouchableOpacity>
          ),
        }}
      />

      <Tabs.Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Posts")}
              style={{ marginLeft: 16 }}
            >
              <AntDesign name="arrowleft" size={24} color="#212121cc" />
            </TouchableOpacity>
          ),
          tabBarStyle: { display: "none" },
        }}
      />

      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
};
