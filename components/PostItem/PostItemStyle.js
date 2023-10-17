import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  postContainer: {
    marginTop: 32,
  },
  postPhotoWrap: {
    width: "100%",
    height: 240,
    backgroundColor: "gray",
    borderRadius: 8,
  },
  postPhoto: {
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
  postTitle: {
    marginTop: 8,
    fontFamily: "Roboto-Medium",
    color: "#212121",
    fontSize: 16,
  },
  postDetails: {
    display: "flex",
    flexDirection: "row",
    marginTop: 8,
    justifyContent: "space-between",
  },
  postComments: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
  },
  postLocation: {
    marginLeft: "auto",
    display: "flex",
    flexDirection: "row",
    gap: 4,
  },
  commentText: {
    fontFamily: "Roboto-Regular",
    color: "#BDBDBD",
    fontSize: 16,
  },
  locationText: {
    fontFamily: "Roboto-Regular",
    color: "#212121",
    fontSize: 16,
    textDecorationLine: "underline",
  },
  // postIcon: {
  //   color: "#BDBDBD",
  // },
});

export const {
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
} = styles;
