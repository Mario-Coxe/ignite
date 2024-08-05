import React from "react";
import { StatusBar, View } from "react-native";
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        translucent
        barStyle={"light-content"}
        backgroundColor={"transparent"}
      />
      <Home />
    </View>
  );
}
