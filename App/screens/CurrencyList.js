import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import currencies from "../data/currencies";
import { RowItem, Separator } from "../components/RowItem";

const styles = StyleSheet.create({
  header: {
    fontSize: 16,
    textAlign: "center",
    paddingVertical: 20,
  },
});

export default ({ route, navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <View>
      <Text style={styles.header}>
        Select the {route?.params?.title ? route.params.title : "Currency"}
      </Text>
      <FlatList
        data={currencies}
        renderItem={({ item }) => (
          <RowItem
            title={item}
            onPress={() => navigation.push("Home", { currency: item })}
          />
        )}
        keyExtractor={(item, index) => item + index}
        ItemSeparatorComponent={() => <Separator />}
        ListFooterComponent={() => (
          <View style={{ paddingBottom: 70 + insets.bottom }} />
        )}
      />
    </View>
  );
};
