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
} from "react-native";
// import Icon from "react-native-vector-icons";

const dataa = [
  {
    Name: "Suraj",
    Email: "Suraj@gmail.com",
  },
  {
    Name: "Neeraj",
    Email: "Neeaj@gmail.com",
  },
  {
    Name: "Aditya",
    Email: "Aditya@gmail.com",
  },
];

const Practice = ({ data }) => {
  const [value, setvalue] = useState("");
  const [apiValue, setapiValue] = useState([]);
  const [loader, setloader] = useState(false);
  const [modal, setmodal] = useState(false);
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
  return (
    <View>
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
        data={dataa}
        renderItem={({ item }) => (
          <>
            <Text>{item.Name}</Text>
            <Text>{item.Email}</Text>
          </>
        )}
      />
      {/* {apiValue.movies.map((item) => {
        return <Text>{item.title}</Text>;
      })}? */}
      <Button title="Loader Buttonn" onPress={handleLoader}></Button>
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
});

export default Practice;
