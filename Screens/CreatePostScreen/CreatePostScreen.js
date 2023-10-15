import { useState } from "react";

import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { MaterialIcons, Ionicons, FontAwesome5 } from "@expo/vector-icons";

import {
  container,
  imgBackground,
  iconWrapp,
  text,
  locationIcon,
  input,
  trashIconWrap,
  btn,
  trashBtn,
  btnText,
} from "./CreatePostScreenStyles";

export const CreatePostScreen = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [isTitleFocus, setIsTitleFocus] = useState(false);
  const [isLocationFocus, setIsLocationFocus] = useState(false);

  return (
    <View style={container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View>
              <View style={imgBackground}>
                <View style={iconWrapp}>
                  <MaterialIcons
                    name="photo-camera"
                    size={24}
                    color="#bdbdbd"
                  />
                </View>
              </View>
              <Text style={text}>Upload picture</Text>
            </View>

            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="Title"
              placeholderTextColor={"#bdbdbd"}
              onFocus={() => setIsTitleFocus(true)}
              onBlur={() => setIsTitleFocus(false)}
              style={{
                ...input,
                borderBottomColor: isTitleFocus ? "#ff6c00" : "#e8e8e8",
                marginTop: 30,
              }}
            />

            <View>
              <Ionicons
                name="ios-location-outline"
                size={24}
                color="#bdbdbd"
                style={{
                  ...locationIcon,
                  color: isLocationFocus ? "#ff6c00" : "#e8e8e8",
                }}
              />

              <TextInput
                value={location}
                onChangeText={setLocation}
                placeholder="Location"
                placeholderTextColor={"#bdbdbd"}
                onFocus={() => setIsLocationFocus(true)}
                onBlur={() => setIsLocationFocus(false)}
                style={{
                  ...input,
                  borderBottomColor: isLocationFocus ? "#ff6c00" : "#e8e8e8",
                  marginTop: 30,
                  paddingLeft: 25,
                }}
              />
            </View>

            <TouchableOpacity style={btn}>
              <Text style={btnText}>Post</Text>
            </TouchableOpacity>

            <View style={trashIconWrap}>
              <TouchableOpacity style={trashBtn}>
                <FontAwesome5 name="trash-alt" size={24} color="#dadada" />
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
