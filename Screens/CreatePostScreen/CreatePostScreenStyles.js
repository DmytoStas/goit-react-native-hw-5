import { StyleSheet, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 28,
    backgroundColor: "#fff",
  },

  imgBackground: {
    width: "100%",
    height: 200,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  iconWrap: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },

  text: {
    marginTop: 8,
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#BDBDBD",
    lineHeight: 19,
  },

  input: {
    width: "100%",
    height: 35,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },

  locationIcon: {
    position: "absolute",
    bottom: 7,
  },

  btn: {
    width: "100%",
    height: 50,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
  },

  btnText: {
    fontFamily: "Roboto",
    color: "#BDBDBD",
    fontSize: 16,
  },

  trashBtn: {
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: "auto",
  },

  trashIconWrap: {
    display: "flex",
    height: "30%",
    alignItems: "center",
  },
});

export const {
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
} = styles;
