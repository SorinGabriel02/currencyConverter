import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

import colors from "../constants/colors";

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.white,
  },
  title: {
    color: colors.text,
    fontSize: 16,
  },
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
  },
});

export const RowItem = ({ title, iconRight, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      {iconRight}
    </TouchableOpacity>
  );
};

export const Separator = () => <View style={styles.separator} />;
