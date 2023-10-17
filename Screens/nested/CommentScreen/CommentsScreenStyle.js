import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 0.5,
    borderBottomWidth: -0.5,
    borderTopColor: "rgba(0, 0, 0, 0.30)",
    borderBottomColor: "rgba(0, 0, 0, 0.30)",
  },
  postPhotoWrap: {
    width: "100%",
    height: 240,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    marginBottom: 32,
  },
  postPhoto: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    backgroundColor: "gray",
  },
  inputWrap: {
    marginTop: 31,
    marginBottom: 16,
  },
  input: {
    height: 50,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 100,
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 15,
  },
  sendBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: 34,
    height: 34,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    position: "absolute",
    top: 8,
    right: 8,
  },
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    textAlign: "center",
  },
});

export const {
  container,
  postPhotoWrap,
  postPhoto,
  inputWrap,
  input,
  sendBtn,
  text,
} = styles;
