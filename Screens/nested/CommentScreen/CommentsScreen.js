import {
  View,
  TextInput,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ImageBackground,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";

import {
  container,
  postPhotoWrap,
  postPhoto,
  inputWrap,
  input,
  sendBtn,
  text,
} from "./CommentsScreenStyle";

export const CommentsScreen = () => {
  const [comment, setComment] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={container}>
        <ScrollView>
          <View style={postPhotoWrap}>
            <ImageBackground style={postPhoto} />
          </View>

          <View style={{ flex: 1, marginTop: 30, paddingHorizontal: 16 }}>
            <Text style={text}>Ще немає коментарів</Text>
          </View>
        </ScrollView>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={inputWrap}>
            <TextInput
              name="comment"
              value={comment}
              placeholder="Comment..."
              placeholderTextColor={"#BDBDBD"}
              style={
                isFocused ? { ...input, borderColor: "#FF6C00" } : { ...input }
              }
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onChangeText={setComment}
            />
            <TouchableOpacity style={sendBtn}>
              <Feather name="arrow-up" size={24} color={"#FFFFFF"} />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};
