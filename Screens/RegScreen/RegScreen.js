import {
  ImageBackground,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Platform,
  Text,
  Alert,
} from "react-native";

import {
  container,
  backgroundImage,
  regContainer,
  avatarContainer,
  avatar,
  addAvatarBtn,
  title,
  input,
  passBtn,
  passBtnText,
  btn,
  btnText,
  regBtnText,
} from "./RegScreenStyle";

import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export const RegScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const onReg = () => {
    if (!login.trim() || !email.trim() || !password.trim()) {
      return Alert.alert("Invalid input", "Fields are empty!", [
        {
          text: "Cancel",
          style: "cancel",
        },
      ]);
    }

    const formValues = {
      login,
      email,
      password,
    };

    console.log("formValues = ", formValues);

    navigation.navigate("Home", { user: { login, email, password } });

    setLogin("");
    setEmail("");
    setPassword("");
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={container}>
        <ImageBackground
          source={require("../../assets/Images/photoBackground.jpg")}
          resizeMode="stretch"
          style={backgroundImage}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{
            minHeight: 248,
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <View style={regContainer}>
            <View style={avatarContainer}>
              <Image style={avatar} />
              <TouchableOpacity style={addAvatarBtn}>
                <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
              </TouchableOpacity>
            </View>

            <Text style={title}>Sign up</Text>

            <View style={{ marginBottom: 16 }}>
              <View>
                <TextInput
                  placeholder="Login"
                  style={{ ...input, marginBottom: 16 }}
                  value={login}
                  onChangeText={setLogin}
                />
              </View>

              <View style={{ marginBottom: 16 }}>
                <TextInput
                  style={input}
                  placeholder="Email"
                  placeholderTextColor={"#BDBDBD"}
                  keyboardType="email-address"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>

              <View style={{ marginBottom: 33, popsition: "relative" }}>
                <TextInput
                  style={input}
                  placeholder="Password"
                  placeholderTextColor={"#BDBDBD"}
                  secureTextEntry={true}
                  value={password}
                  onChangeText={setPassword}
                />

                <TouchableOpacity style={passBtn}>
                  <Text style={passBtnText}>Show</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={btn} onPress={onReg}>
                <Text style={btnText}>Sign up</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={regBtnText}>
                {`Already registered? `}
                <Text style={{ textDecorationLine: "underline" }}>Log in</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};
