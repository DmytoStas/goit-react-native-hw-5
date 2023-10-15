import { StyleSheet, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    justifyContent: "flex-end",
    paddingBottom: 83,

    width: screenWidth,
    height: screenHeight,
  },

  regContainer: {
    position: "relative",

    width: screenWidth,
    paddingTop: 22,
    paddingHorizontal: 16,
    paddingBottom: 16,

    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  avatarContainer: {
    position: "absolute",
    top: -60,
    alignSelf: "center",
  },

  avatar: {
    width: 120,
    height: 120,
    backgroundColor: "#f6f6f6",
    borderRadius: 16,
  },

  addAvatarBtn: {
    position: "absolute",
    right: -12,
    bottom: 14,
  },

  title: {
    marginTop: 46,
    marginBottom: 26,

    color: "#212121",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
  },
});

export const {
  container,
  backgroundImage,
  regContainer,
  avatarContainer,
  avatar,
  addAvatarBtn,
  title,
} = styles;
