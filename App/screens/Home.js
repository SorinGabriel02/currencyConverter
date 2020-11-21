import React, { useState } from "react";
import {
  StatusBar,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  ScrollView,
} from "react-native";
import { format } from "date-fns";

import colors from "../constants/colors";
import { ConversionInput } from "../components/ConversionInput";
import { Button } from "../components/Button";
import { KeyboardSpacer } from "../components/KeyboardSpacer";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    justifyContent: "center",
    paddingTop: 25,
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
  text: {
    textAlign: "center",
    color: colors.white,
    marginTop: 12,
  },
});

export default () => {
  const baseCurrency = "USD";
  const quoteCurrency = "GBP";
  const conversionRate = 0.8765;
  const date = new Date();

  const [scroll, setScroll] = useState(false);

  const onButtonPress = () => {
    alert("Pressed!");
  };

  const onChangeText = (text) => {
    alert("Text: " + text);
  };

  const handleReverseBtn = () => {
    alert("Reverse Activated!");
  };

  const keyboardToggle = (activateScroll) => {
    setScroll(activateScroll);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />

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

        <ConversionInput
          keyboardType="numeric"
          onChangeText={onChangeText}
          text={baseCurrency}
          value="123"
          onButtonPress={onButtonPress}
        />
        <ConversionInput
          onChangeText={onChangeText}
          text={quoteCurrency}
          value="123"
          onButtonPress={onButtonPress}
          editable={false}
        />
        <Text style={styles.text}>
          {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(
            date,
            "MMM do, yyyy"
          )}`}
        </Text>

        <Button text="Reverse Currencies" onPress={handleReverseBtn} />
        <KeyboardSpacer onToggle={keyboardToggle} />
      </ScrollView>
    </View>
  );
};
