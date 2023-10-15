import {
  ImageBackground,
  Image,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

import { Feather, AntDesign } from "@expo/vector-icons";

import {
  container,
  backgroundImage,
  regContainer,
  avatarContainer,
  avatar,
  addAvatarBtn,
  title,
} from "./ProfileScreenStyles";

export const ProfileScreen = ({ navigation }) => {
  return (
    <View style={container}>
      <ImageBackground
        source={require("../../assets/Images/photoBackground.jpg")}
        resizeMode="stretch"
        style={backgroundImage}
      >
        <View style={regContainer}>
          <View style={avatarContainer}>
            <Image style={avatar} />
            <TouchableOpacity style={addAvatarBtn}>
              <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={{ marginLeft: "auto" }}
          >
            <Feather name="log-out" size={24} color="#bdbdbd" />
          </TouchableOpacity>

          <Text style={title}>Mango</Text>

          <View style={{ marginBottom: 16 }}>
            <Text style={{ textAlign: "center" }}>Mango posts</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
