import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
  ActivityIndicator,
  Modal,
  TouchableOpacity,
  Dimensions,
  RefreshControl,
  // ToastAndroid,
} from "react-native";
// import Icon from "react-native-vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Ionicicons } from "react-native-vector-icons/Ionicons";
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { WebView } from "react-native-webview";
// import ProgressBar from "react-native-progress/Bar";
// import ProgressCircle from "react-native-progress/Circle";
import Practice3 from "./Practice3";
import Practice4 from "./Practice4";
import Practice5 from "./Pratice5";
// import { event } from "react-native-reanimated";
// import FilePicker from "react-native-document-picker";
import Video from "react-native-video";

const dataa = [
  {
    id: 1,
    Name: "Su",
    Email: "Suraj@gmail.com",
  },
  {
    id: 2,
    Name: "Neeraj",
    Email: "Neeaj@gmail.com",
  },
  {
    id: 3,
    Name: "Aditya",
    Email: "Aditya@gmail.com",
  },
];

const Practice = ({ data }) => {
  const [value, setvalue] = useState("");
  const [apiValue, setapiValue] = useState([]);
  const [loader, setloader] = useState(false);
  const [modal, setmodal] = useState(false);
  const [progressSet, setprogressSet] = useState(0);
  const [loaded, setloaded] = useState(false);
  const [isRefreshing, setisRefreshing] = useState(false);
  const Tab = createBottomTabNavigator();

  const [isRotate, setisRotate] = useState(false);
  // const Drawer = createDrawerNavigator();

  useEffect(() => {
    Dimensions.addEventListener("change", () => {
      const orientation = isPotrait();

      setisRotate(orientation);
    });
    return () => {};
  }, []);

  const isPotrait = () => {
    const { height, width } = Dimensions.get("screen");
    return height > width ? false : true;
  };

  // const showToastMsg = () => {
  //   try {
  //     ToastAndroid.showWithGravityAndOffset(
  //       "Hello World",
  //       ToastAndroid.LONG,
  //       ToastAndroid.TOP,
  //       100,
  //       100
  //     );
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const [arrayData, setarrayData] = useState([
    { rollNo: 1, name: "A" },
    { rollNo: 2, name: "B" },
    { rollNo: 3, name: "C" },
    { rollNo: 4, name: "D" },
    { rollNo: 5, name: "E" },
  ]);
  const handleArrayClick = (oldRoll) => {
    setarrayData((prevData) => {
      return prevData.filter((tempData) => {
        if (tempData.rollNo != oldRoll) {
          return tempData;
        }
      });
    });
  };

  function abc() {
    alert(value);
  }

  const fetchAPI = async () => {
    try {
      const data = await fetch("https://reactnative.dev/movies.json");
      const response = await data.json();
      setapiValue(response);
      // console.warn(response);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  console.warn("apiValue", apiValue.movies);

  const handleLoader = () => {
    setloader(true);

    setTimeout(() => {
      alert("Loader True");
      setloader(false);
    }, 5000);
  };

  const handleModal = () => {
    setmodal(true);
  };

  const handleRefresh = () => {
    setisRefreshing(true);
    setTimeout(() => {
      setisRefreshing(false);
    }, 2000);
  };

  // const handleFilePicker = async () => {
  //   try {
  //     await FilePicker.pick({
  //       presentationStyle: "fullScreen",
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <View
      style={{
        height: height,
        width: width,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        flexDirection: isRotate ? "row" : "column",
      }}
    >
      <Text style={{ justifyContent: "center", alignItems: "center" }}>
        {" "}
        Practice Component{" "}
      </Text>
      <Text style={{ justifyContent: "center", alignItems: "center" }}>
        {" "}
        Received From Prop {data}{" "}
      </Text>
      <Text style={{ fontSize: 30, justifyContent: "center" }}>
        {" "}
        Style In Native{" "}
      </Text>
      <Text style={style.red}> Styles Using StyleSheet </Text>
      <Text>{value}</Text>
      <TextInput
        maxLength={10}
        onChangeText={(e) => setvalue(e)}
        placeholder="Enter Your Here "
      ></TextInput>
      <TextInput
        keyboardType={"numeric"}
        onChangeText={(e) => setvalue(e)}
        placeholder="Enter Your Password"
        secureTextEntry={true}
      ></TextInput>

      <View style={{ flex: 1 }}>
        <View style={{ flex: 2, backgroundColor: "#0096FF" }}></View>
        <View style={{ flex: 1, backgroundColor: "#6495ED" }}></View>

        <View style={{ flex: 3, backgroundColor: "#5D3FD3" }}></View>
      </View>

      <Button title="Submit" onPress={abc}>
        {" "}
      </Button>

      <ScrollView horizontal={true}>
        <Text>Scroll View</Text>

        <View
          style={{ height: 150, width: 150, backgroundColor: "#0096FF" }}
        ></View>

        <View
          style={{ height: 150, width: 150, backgroundColor: "#6495ED" }}
        ></View>

        <View
          style={{ height: 150, width: 150, backgroundColor: "#5D3FD3" }}
        ></View>

        <View
          style={{ height: 150, width: 150, backgroundColor: "#0096FF" }}
        ></View>

        <View
          style={{ height: 150, width: 150, backgroundColor: "#0096FF" }}
        ></View>

        <View
          style={{ height: 150, width: 150, backgroundColor: "#5D3FD3" }}
        ></View>

        <View
          style={{ height: 150, width: 150, backgroundColor: "#6495ED" }}
        ></View>

        <View
          style={{ height: 150, width: 150, backgroundColor: "#6495ED" }}
        ></View>
      </ScrollView>

      <Text>FlatList</Text>

      <FlatList
        keyExtractor={(item) => item.id}
        data={dataa}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity>
              <Text>{item.Name}</Text>
              <Text>{item.Email}</Text>
            </TouchableOpacity>
          </>
        )}
      />
      {/* {apiValue.movies.map((item) => {
        return <Text>{item.title}</Text>;
      })}? */}

      <Button title="Loader Buttonn" onPress={handleLoader}></Button>
      <Button title="Toast Message" onPress={() => showToastMsg()}></Button>

      <View>
        {/* {!loaded ? <ProgressBar progress={progressSet} width={200} /> : null} */}

        {/* <WebView
        source={{ uri: "https://reactnative.dev/" }}
        onError={(event) => {
          console.log(event);
          alert(`Webview Error : ${event.nativeEvent.description}`);

        }}
        onLoadProgress= {event => setprogressSet(event.nativeEvent.progressSet)}
        onLoadEnd ={()=> setloaded(true)}
      /> */}
      </View>

      {loader ? (
        <ActivityIndicator color="green" size={50} />
      ) : (
        <Text>Data is Loaded</Text>
      )}

      <Button title="Open Modal" onPress={handleModal}></Button>
      {modal ? (
        <Modal transparent={true}>
          <View style={{ backgroundColor: "#6495ED" }}>
            <View
              style={{
                margin: 70,
                backgroundColor: "#5D3FD3",

                borderRadius: 5,
              }}
            >
              <Text>Modal Opened</Text>
              <Button
                title="Close Modal"
                onPress={() => setmodal(false)}
              ></Button>
            </View>
          </View>
        </Modal>
      ) : (
        <Text>Modal</Text>
      )}
      {/* <Icon name="person" size={50} />
      <Icon name="contacts" size={50} />
      <Icon name="group" size={50} />
      <Icon name="badge" size={50} /> */}
      {/* <FlatList
        keyExtractor={(item) => item.rollNo}
        data={arrayData}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => handleArrayClick(item.rollNo)}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      ></FlatList> */}

      {/* <Tab.Navigator>
        <Tab.Screen name="Practice3" component={Practice3} />
        <Tab.Screen
          name="Practice4"
          component={Practice4}
          options={{
            tabBarIcon: () => {
              return <Ionicicons name="home" />;
            },
          }}
        />
        <Tab.Screen name="Practice5" component={Practice5} />
      </Tab.Navigator> */}

      {/* <Drawer.Navigator>
      <Drawer.Screen name="Practice4" component={Practice4} />
      <Drawer.Screen name="Practice5" component={Practice5} />
    </Drawer.Navigator> */}

      {/* <ScrollView
        refreshControl={() => {
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={() => handleRefresh()}
          />;
        }}
      ></ScrollView> */}

      {/* <Button title="Close Modal" onPress={() => handleFilePicker()}></Button> */}
      <Video
        source={{
          url: "https://www.youtube.com/watch?v=-CJ3_0vyzNs&list=RD6nxrllqnP2Q&index=4",
        }}
        style={style.video}
      ></Video>
    </View>
  );
};

const style = StyleSheet.create({
  red: {
    fontSize: 20,
    color: "white",
    backgroundColor: "#5C5CFF",
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default Practice;
