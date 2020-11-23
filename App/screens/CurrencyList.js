import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";

import colors from "../constants/colors";
import currencies from "../data/currencies";
import { RowItem, Separator } from "../components/RowItem";
import { ConversionContext } from "../utils/ConversionContext";

const styles = StyleSheet.create({
  header: {
    fontSize: 16,
    textAlign: "center",
    paddingVertical: 20,
  },
  checkIcon: {
    width: 30,
    height: 30,
    backgroundColor: colors.blue,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
});

export default ({ route, navigation }) => {
  const insets = useSafeAreaInsets();
  const {
    baseCurrency,
    quoteCurrency,
    setBaseCurrency,
    setQuoteCurrency,
  } = useContext(ConversionContext);

  const title = route?.params?.title ? route.params.title : "Currency";
  const newCurrency =
    title === "Base Currency" ? "baseCurrency" : "quoteCurrency";
  const activeCurr =
    newCurrency === "baseCurrency" ? baseCurrency : quoteCurrency;

  return (
    <View>
      <Text style={styles.header}>Select the {title}</Text>
      <FlatList
        data={currencies}
        renderItem={({ item }) => (
          <RowItem
            title={item}
            onPress={() => {
              newCurrency === "baseCurrency"
                ? setBaseCurrency(item)
                : setQuoteCurrency(item);

              navigation.navigate("Home");
            }}
            iconRight={
              activeCurr === item && (
                <View style={styles.checkIcon}>
                  <Entypo name="check" size={22} color="white" />
                </View>
              )
            }
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
