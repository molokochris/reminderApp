import { useState } from "react";
import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import List from "./Components/List";
// import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [selected, setSelected] = useState("");
  const image = require("./assets/images/header-img.png");
  return (
    <View>
      <StatusBar backgroundColor={"whitesmoke"} barStyle={"dark-content"} />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.head}>
            <Text style={styles.headText}>OccaLink</Text>
          </View>
          <View style={styles.body}>
            <Image source={image} style={styles.image} />
            <View style={styles.input}>
              <Text>Enter Name:</Text>
              <TextInput style={styles.inputText} />
              <Text>Enter Surname:</Text>
              <TextInput style={styles.inputText} />
            </View>
            <View style={styles.ages}>
              {/* <Text style={styles.label}>DD</Text> */}
              <TextInput
                placeholder="DD"
                numberOfLines={1}
                keyboardType="number-pad"
                maxLength={1}
                style={styles.ageInput}
              />
              <Text style={styles.label}>/</Text>
              {/* <Text style={styles.label}>MM</Text> */}
              <TextInput
                placeholder="MM"
                numberOfLines={1}
                keyboardType="number-pad"
                maxLength={1}
                style={styles.ageInput}
              />
              <Text style={styles.label}>/</Text>
              {/* <Text style={styles.label}>YYYY</Text> */}
              <TextInput
                placeholder="YYYY"
                numberOfLines={1}
                keyboardType="number-pad"
                maxLength={4}
                style={styles.ageInputYear}
              />
            </View>
            <Pressable style={styles.buttonSave}>
              <Text style={styles.buttonText}>Save</Text>
            </Pressable>
          </View>
          <View style={styles.head}>
            <Text>&copy;</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: "4%",
    // height: 600,
  },
  head: {
    padding: "1%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headText: {
    fontWeight: "bold",
    fontSize: 18,
    // position: "sticky",
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "blue",
    // padding: 10,
    // height: 700,
  },
  image: {
    width: 300,
    height: 300,
  },
  input: {
    // marginTop: 200,
  },
  inputText: {
    padding: "2%",
    borderWidth: 1,
    width: 280,
    marginBottom: "2%",
    marginTop: "1%",
    borderRadius: 6,
  },
  ages: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "4%",
    marginBottom: "10%",
    // backgroundColor: 'yellow',
  },
  label: {
    marginLeft: 5,
  },
  ageInput: {
    borderWidth: 1,
    padding: "2%",
    borderRadius: 8,
    marginLeft: 10,
  },
  ageInputYear: {
    borderRadius: 8,
    borderWidth: 1,
    padding: "2%",
    // paddingHorizontal: '1%',
    marginLeft: 10,
  },
  buttonSave: {
    // backgroundColor: "#00BFA6",
    backgroundColor: "black",
    paddingHorizontal: "8%",
    paddingVertical: "4%",
    marginTop: "5%",
    marginBottom: "5%",
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
  foot: {
    flex: 1,
    padding: 10,
    backgroundColor: "yellow",
  },
});
