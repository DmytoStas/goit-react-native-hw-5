import { View, Text, StyleSheet } from "react-native";
import { PostItem } from "../../../components/PostItem";

export const PostScreen = () => {
  return (
    <View style={styles.container}>
      <PostItem />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  title: {
    marginTop: 44,
    fontSize: 17,
    lineHeight: 35,
    textAlign: "center",
    color: "#212121",
  },
});
