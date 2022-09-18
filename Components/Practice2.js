import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Practice3 from "./Practice3";
import Practice4 from "./Practice4";
import Practice5 from "./Pratice5";

export default function Practice2({ navigation }) {
  const Tab = createBottomTabNavigator();

  const navigateHook = useNavigation();
  function handleNavigation(screenName) {
    // navigation.navigate(screenName);
    navigateHook.navigate(screenName);
  }

  const [name, setname] = useState("");

  const handleSubmit = () => {
    // navigation.navigate("Practice3", {
    //   userName: name,
    // });

    navigateHook.navigate("Practice3", {
      userName: name,
    });
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
        <TouchableOpacity
          onPress={() => handleSubmit()}
          // onPress={() => navigateHook.navigate("Practice3")}
          style={{
            backgroundColor: "lightblue",
            padding: 30,
            marginBottom: 20,
          }}
        >
          <Text style={{ color: "black" }}>Rediret to Page 3</Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView>
        <TextInput
          value={name}
          style={style.input}
          placeholder="Enter Your Name"
          onChangeText={(text) => setname(text)}
        />
        <TouchableOpacity onPress={() => handleSubmit()}>
          <Text style={style.button}>Submit</Text>
        </TouchableOpacity>
      </SafeAreaView>

      <Tab.Navigator>
        <Tab.Screen name="Practice3" component={Practice3} />
        <Tab.Screen name="Practice4" component={Practice4} />
        <Tab.Screen name="Practice5" component={Practice5} />
      </Tab.Navigator>
    </View>
  );
}
const style = StyleSheet.create({
  input: {
    width: 200,
    borderWidth: 1,
    marginTop: 30,
    padding: 10,
    color: "black",
  },
  button: {
    width: 150,
    backgroundColor: "lightblue",
    padding: 10,
    marginTop: 50,
    borderRadius: 30,
    color: "black",
    marginLeft: 17,
  },
});
