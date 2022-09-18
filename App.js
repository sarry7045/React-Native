import React from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from "react-native";
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Practice from "./Components/Practice";
import Practice2 from "./Components/Practice2";
import Practice3 from "./Components/Practice3";
import Practice4 from "./Components/Practice4";
import Practice5 from "./Components/Pratice5";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";
  const Stack = createNativeStackNavigator();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const data = "Some Data";

  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Practice2" component={Practice2} />
    //     <Stack.Screen name="Practice3" component={Practice3} />
    //     <Stack.Screen name="Practice" component={Practice} />
    //     <Stack.Screen name="Practice4" component={Practice4} />
    //     <Stack.Screen name="Practice5" component={Practice5} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <View>
      <Practice data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default App;

// <SafeAreaView style={backgroundStyle}>
//   <StatusBar
//     barStyle={isDarkMode ? "light-content" : "dark-content"}
//     backgroundColor={backgroundStyle.backgroundColor}
//   />
//   <ScrollView
//     contentInsetAdjustmentBehavior="automatic"
//     style={backgroundStyle}
//   >
//     <Header />
//     <View
//       style={{
//         backgroundColor: isDarkMode ? Colors.black : Colors.white,
//       }}
//     >
//       <Section title="Step One">
//         Edit <Text style={styles.highlight}>App.js</Text> to change this
//         screen and then come back to see your edits.
//       </Section>
//       <Section title="See Your Changes">
//         <ReloadInstructions />
//       </Section>
//       <Section title="Debug">
//         <DebugInstructions />
//       </Section>
//       <Section title="Learn More">
//         Read the docs to discover what to do next:
//       </Section>
//       <LearnMoreLinks />
//     </View>
//   </ScrollView>
// </SafeAreaView>
// <View>
