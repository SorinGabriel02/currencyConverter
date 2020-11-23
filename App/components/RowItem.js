import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

import colors from "../constants/colors";

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.white,
  },
  title: {
    color: colors.text,
    fontSize: 16,
    paddingHorizontal: 20,
  },
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
  },
});

export const RowItem = ({ title, iconRight, onPress, fromRoute }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.row,
        {
          justifyContent: fromRoute === "Options" ? "space-between" : "center",
        },
      ]}
    >
      <Text style={styles.title}>{title}</Text>
      {iconRight}
    </TouchableOpacity>
  );
};

export const Separator = () => <View style={styles.separator} />;
