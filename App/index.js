import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Home from "./screens/Home";

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "lightblue",
  },
});

const App = () => (
  <SafeAreaView style={styles.app}>
    <Home />
  </SafeAreaView>
);

export default App;
