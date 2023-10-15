import { StyleSheet, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },

  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,

    width: screenWidth,
    height: screenHeight,
  },

  regContainer: {
    position: "relative",

    width: screenWidth,
    paddingTop: 82,
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
    marginBottom: 26,

    color: "#212121",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
  },

  input: {
    height: 50,
    paddingLeft: 16,

    color: "#212121",
    fontSize: 16,
    lineHeight: 19,

    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderRadius: 8,
    backgroundColor: "#f6f6f6",
  },

  passBtn: {
    position: "absolute",
    top: 16,
    right: 19,
  },

  passBtnText: {
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },

  btn: {
    justifyContent: "center",
    alignItems: "center",
    height: 51,
    paddingLeft: 32,
    paddingRight: 32,

    backgroundColor: "#ff6c00",
    borderRadius: 100,
  },

  btnText: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#fff",
  },

  regBtnText: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
  },
});

export const {
  container,
  backgroundImage,
  authContainer,
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
} = styles;
