import { View, Text, StyleSheet } from "react-native";

export const PostScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Posts will be here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    marginTop: 44,
    fontSize: 17,
    lineHeight: 35,
    textAlign: "center",
    color: "#212121",
  },
});
