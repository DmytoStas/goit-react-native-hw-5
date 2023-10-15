import {
  ImageBackground,
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
  authContainer,
  title,
  input,
  passBtn,
  passBtnText,
  btn,
  btnText,
  regBtnText,
} from "./LoginScreenStyle";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const onLogin = () => {
    if (!email.trim() || !password.trim()) {
      return Alert.alert("Invalid input", "Fields are empty!", [
        {
          text: "Cancel",
          style: "cancel",
        },
      ]);
    }

    const formValues = {
      email,
      password,
    };

    console.log("formValues = ", formValues);

    navigation.navigate("Home", { user: { email, password } });

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
          <View style={authContainer}>
            <Text style={title}>Log in</Text>

            <View style={{ marginBottom: 16 }}>
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

              <View style={{ marginBottom: 43, popsition: "relative" }}>
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

              <TouchableOpacity style={btn} onPress={onLogin}>
                <Text style={btnText}>Log in</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={regBtnText}>
                {`Not registered yet? `}
                <Text style={{ textDecorationLine: "underline" }}>Sign up</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};
