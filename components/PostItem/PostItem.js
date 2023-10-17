import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

import {
  postContainer,
  postPhotoWrap,
  postPhoto,
  postTitle,
  postDetails,
  postComments,
  postLocation,
  commentText,
  locationText,
  postIcon,
} from "./PostItemStyle";

export const PostItem = () => {
  const navigation = useNavigation();
  const [likes, setLikes] = useState(0);
  const [userPutLike, setUserPutLike] = useState(false);

  const handleLikes = () => {
    let likesNum = likes;
    if (userPutLike) {
      setLikes(likesNum - 1);
      setUserPutLike(false);
      return;
    }
    setLikes(likesNum + 1);
    setUserPutLike(true);
  };

  return (
    <View style={postContainer}>
      <View style={postPhotoWrap}>
        <ImageBackground style={postPhoto} />
      </View>

      <Text style={postTitle}>Title</Text>

      <View style={postDetails}>
        <TouchableOpacity
          style={postComments}
          onPress={() => navigation.navigate("Comments")}
        >
          <Feather
            name="message-circle"
            size={24}
            color={"#FF6C00"}
            style={postIcon}
          />
          <Text style={commentText}>152</Text>
        </TouchableOpacity>

        <View style={{ ...postComments, marginLeft: 24 }}>
          <Feather
            name="thumbs-up"
            size={24}
            color={!userPutLike ? "#BDBDBD" : "#FF6C00"}
            onPress={handleLikes}
          />
          <Text style={commentText}>{likes}</Text>
        </View>

        <TouchableOpacity
          style={postLocation}
          onPress={() => navigation.navigate("Map")}
        >
          <Feather name="map-pin" size={24} style={postIcon} />
          <Text style={locationText}>Location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
