import React from "react";
import { ScrollView, Linking, Alert } from "react-native";
import { Entypo } from "@expo/vector-icons";

import colors from "../constants/colors";
import { RowItem, Separator } from "../components/RowItem";

const goToUrl = (url) => {
  return Linking.openURL(url).catch(() =>
    Alert.alert("Something went wrong. Please try again later.")
  );
};

export default () => {
  return (
    <ScrollView>
      <RowItem
        onPress={() => alert("Why press?!?")}
        title={"Themes"}
        iconRight={
          <Entypo name="chevron-right" size={20} color={colors.blue} />
        }
      />
      <Separator />
      <RowItem
        onPress={() => goToUrl("https://google.com")}
        title={"Google it"}
        iconRight={<Entypo name="export" size={20} color={colors.blue} />}
      />
      <Separator />
      <RowItem
        onPress={() => goToUrl("https://gabidev.me")}
        title={"See my portfolio"}
        iconRight={<Entypo name="export" size={20} color={colors.blue} />}
      />
    </ScrollView>
  );
};
