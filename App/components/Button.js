import React from "react";
import { Text, TouchableOpacity, Image, StyleSheet } from "react-native";

import colors from "../constants/colors";

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  image: {
    width: 20,
    marginRight: 8,
  },
  text: {
    fontSize: 18,
    color: colors.white,
  },
});

export const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("../assets/images/reverse.png")}
      />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
