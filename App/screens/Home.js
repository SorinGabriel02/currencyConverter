import React, { useState, useContext } from "react";
import {
  StatusBar,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { format } from "date-fns";
import { Entypo } from "@expo/vector-icons";

import colors from "../constants/colors";
import { ConversionInput } from "../components/ConversionInput";
import { Button } from "../components/Button";
import { KeyboardSpacer } from "../components/KeyboardSpacer";
import { ConversionContext } from "../utils/ConversionContext";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    justifyContent: "center",
    paddingTop: 15,
  },
  headerText: {
    textAlign: "center",
    marginBottom: 14,
    fontSize: 25,
    color: colors.white,
    textShadowColor: "#ffbb00",
    textShadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 1,
  },
  imagesContainer: {
    justifyContent: "center",
    alignItems: "center",
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  logo: {
    position: "absolute",
    width: screen.width * 0.2,
    height: screen.height * 0.2,
    resizeMode: "contain",
  },
  logoBg: {
    width: screen.width * 0.3,
    height: screen.height * 0.3,
    resizeMode: "contain",
  },
  optionsBtn: {
    alignSelf: "flex-end",
    marginRight: 20,
    width: 42,
  },
  optionsIcon: {
    color: colors.white,
  },
  text: {
    textAlign: "center",
    color: colors.white,
    marginTop: 12,
  },
});

export default ({ route, navigation }) => {
  const {
    baseCurrency,
    setBaseCurrency,
    quoteCurrency,
    setQuoteCurrency,
    exchangeRate,
    date,
    isLoading,
  } = useContext(ConversionContext);

  const [scroll, setScroll] = useState(false);
  const [input, setInput] = useState("1");

  const onButtonPress = (title) => {
    navigation.navigate("Currency List", { title });
  };

  const onChangeText = (value) => {
    setInput(value);
  };

  const handleReverseBtn = () => {
    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(baseCurrency);
  };

  const keyboardToggle = (activateScroll) => {
    setScroll(activateScroll);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.blue} />
      <View>
        <TouchableOpacity
          style={styles.optionsBtn}
          onPress={() => navigation.push("Options")}
        >
          <Entypo style={styles.optionsIcon} name="cog" size={38} />
        </TouchableOpacity>
      </View>
      <ScrollView scrollEnabled={scroll}>
        <View style={styles.imagesContainer}>
          <Image
            style={styles.logoBg}
            source={require("../assets/images/background.png")}
          />
          <Image
            style={styles.logo}
            source={require("../assets/images/logo.png")}
          />
        </View>

        <Text style={styles.headerText}>Currency Checker</Text>

        {isLoading ? (
          <ActivityIndicator size="large" color={colors.white} />
        ) : (
          <React.Fragment>
            <ConversionInput
              keyboardType="numeric"
              onChangeText={onChangeText}
              text={baseCurrency}
              value={input}
              onButtonPress={() => onButtonPress("Base Currency")}
            />
            <ConversionInput
              onChangeText={onChangeText}
              text={quoteCurrency}
              value={
                input ? `${(parseFloat(input) * exchangeRate).toFixed(2)}` : "0"
              }
              onButtonPress={() => onButtonPress("Quote Currency")}
              editable={false}
            />
            <Text style={styles.text}>
              {`1 ${baseCurrency} = ${exchangeRate} ${quoteCurrency} as of ${format(
                date,
                "MMM do, yyyy"
              )}`}
            </Text>

            <Button text="Reverse Currencies" onPress={handleReverseBtn} />
          </React.Fragment>
        )}
        <KeyboardSpacer onToggle={keyboardToggle} />
      </ScrollView>
    </View>
  );
};
