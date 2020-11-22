import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import Navigation from "./config/Navigation";

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "lightblue",
  },
});

const App = () => (
  <SafeAreaView style={styles.app}>
    <Navigation />
  </SafeAreaView>
);

export default App;
