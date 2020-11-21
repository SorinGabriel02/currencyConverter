import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, Platform, Keyboard } from "react-native";

const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export const KeyboardSpacer = ({ onToggle }) => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const showKeyboardEvName =
      Platform.OS === "android" ? "keyboardDidShow" : "keyboardWillShow";
    const hideKeyboardEvName =
      Platform.OS === "android" ? "keyboardDidHide" : "keyboardWillHide";

    function increaseSpace(event) {
      // the height of the keyboard
      const endY = event.endCoordinates.screenY;
      const screenHeight = Dimensions.get("window").height;
      console.log(screenHeight, endY);

      // when keyboard shows add extra height to the screen
      // and make it scroll-able
      setKeyboardHeight(screenHeight - endY + 20);
      onToggle(true);
    }

    function resetSpace() {
      setKeyboardHeight(0);
      onToggle(false);
    }

    const show = Keyboard.addListener(showKeyboardEvName, increaseSpace);
    const hide = Keyboard.addListener(hideKeyboardEvName, resetSpace);

    return () => {
      show.remove();
      hide.remove();
    };
  }, []);

  return <View style={[styles.container, { height: keyboardHeight }]} />;
};
