import React from "react";

import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  btn: {
    borderRightColor: colors.blue,
    borderRightWidth: 1,
    marginRight: 8,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },
  btnText: {
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: colors.blue,
  },
  container: {
    backgroundColor: colors.white,
    flexDirection: "row",
    marginHorizontal: 20,
    borderRadius: 5,
    marginBottom: 12,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  containerDisabled: {
    backgroundColor: colors.offWhite,
  },
  input: {
    flex: 1,
    padding: 5,
    color: colors.textLight,
    fontWeight: "bold",
  },
});

export const ConversionInput = ({ text, onButtonPress, ...rest }) => {
  const containerStyles = [styles.container];

  if (rest.editable === false) {
    containerStyles.push(styles.containerDisabled);
  }

  return (
    <View style={containerStyles}>
      <TouchableOpacity style={styles.btn} onPress={onButtonPress}>
        <Text style={styles.btnText}>{text}</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} {...rest} />
    </View>
  );
};
