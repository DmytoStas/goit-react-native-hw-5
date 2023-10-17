import { useState, useEffect } from "react";

import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import {
  container,
  text,
  locationIcon,
  input,
  trashIconWrap,
  btn,
  trashBtn,
  btnText,
  postPhotoWrap,
  cameraBtn,
  flipContainer,
} from "./CreatePostScreenStyles";
import { ScrollView } from "react-native-gesture-handler";

export const CreatePostScreen = () => {
  const navigation = useNavigation();

  const [title, setTitle] = useState("");
  const [isTitleFocus, setIsTitleFocus] = useState(false);
  const [isLocationFocus, setIsLocationFocus] = useState(false);

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photoLocation, setPhotoLocation] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      setPhoto(uri);
    }
  };

  const pickImage = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status === "granted") {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        if (!result.canceled) {
          setPhoto(result.assets[0].uri);
        }
      }
    } catch (error) {
      console.log("error", error.message);
    }
  };

  const createPost = async () => {
    let location = await Location.getCurrentPositionAsync({});
    const geoLocation = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };

    const post = {
      photo,
      title,
      photoLocation,
      geoLocation,
      createdAt: new Date().getTime(),
    };

    console.log(post);

    removePost();
    navigation.navigate("Posts");
  };

  const removePost = () => {
    setPhoto("");
    setTitle("");
    setPhotoLocation("");
  };

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={container}>
          {photo ? (
            <ImageBackground source={{ uri: photo }} style={postPhotoWrap}>
              <TouchableOpacity
                style={{ ...cameraBtn, opacity: 0.4 }}
                onPress={() => {
                  setPhoto("");
                }}
              >
                <Ionicons name="ios-camera" size={24} color={"#FFFFFF"} />
              </TouchableOpacity>
            </ImageBackground>
          ) : (
            <Camera style={postPhotoWrap} type={type} ref={setCameraRef}>
              <MaterialCommunityIcons
                name="camera-flip"
                size={22}
                color={"#BDBDBD"}
                style={flipContainer}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}
              />
              <TouchableOpacity style={cameraBtn} onPress={takePhoto}>
                <Ionicons name="ios-camera" size={24} color={"#BDBDBD"} />
              </TouchableOpacity>
            </Camera>
          )}

          {photo ? (
            <Text style={text}>Редагувати фото</Text>
          ) : (
            <TouchableOpacity onPress={pickImage}>
              <Text style={text}>Завантажте фото</Text>
            </TouchableOpacity>
          )}

          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <TextInput
              name="title"
              value={title}
              onChangeText={setTitle}
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
                name="location"
                value={photoLocation}
                onChangeText={setPhotoLocation}
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

            <TouchableOpacity
              style={{
                ...btn,
                backgroundColor:
                  photo && title && photoLocation ? "#FF6C00" : "#F6F6F6",
              }}
              disabled={photo && title && photoLocation ? false : true}
              onPress={createPost}
            >
              <Text
                style={{
                  ...btnText,
                  color:
                    photo && title && photoLocation ? "#FFFFFF" : "#BDBDBD",
                }}
              >
                Post
              </Text>
            </TouchableOpacity>

            <View style={trashIconWrap}>
              <TouchableOpacity style={trashBtn} onPress={removePost}>
                <FontAwesome5 name="trash-alt" size={24} color="#dadada" />
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};
