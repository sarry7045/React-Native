import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";

export default function Practice3({ route, navigation }) {
  const routeHook = useRoute();
  const navigateHook = useNavigation();
  function handleNavigation(screenName) {
    navigateHook.navigate(screenName);
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
        <TouchableOpacity
          onPress={() => handleNavigation("Practice2")}
          style={{
            backgroundColor: "lightblue",
            padding: 30,
            marginBottom: 20,
          }}
        >
          <Text style={{ color: "black" }}>Redirect Previous Page</Text>
        </TouchableOpacity>
        <Text style={{ color: "black" }}>
          Name: {routeHook.params.userName}
        </Text>
      </View>
    </View>
  );
}
