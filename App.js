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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Form from "./Components/Form";
import List from "./Components/List";
import { useFonts } from "expo-font";
import styleForm from "./assets/stylesheets/styleForm";
import Home from "./Components/Home";

export default function App() {
  const Stack = createNativeStackNavigator();

  const [fontsLoaded] = useFonts({
    Jua: require("./assets/fonts/Jua-Regular.ttf"),
    Kolker: require("./assets/fonts/KolkerBrush-Regular.ttf"),
  });
  const [selected, setSelected] = useState("");
  const image = require("./assets/images/header-img.png");
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Form"
          component={Form}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="List"
          component={List}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create(style);
// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "white",
//     paddingTop: "4%",
//     // height: 600,
//   },
//   head: {
//     padding: "1%",
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   headText: {
//     fontWeight: "bold",
//     fontSize: 18,
//     // position: "sticky",
//   },
//   body: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     // backgroundColor: "blue",
//     // padding: 10,
//     // height: 700,
//   },
//   image: {
//     width: 300,
//     height: 300,
//   },
//   input: {
//     // marginTop: 200,
//   },
//   inputText: {
//     padding: "2%",
//     borderWidth: 1,
//     width: 280,
//     marginBottom: "2%",
//     marginTop: "1%",
//     borderRadius: 6,
//   },
//   ages: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: "4%",
//     marginBottom: "10%",
//     // backgroundColor: 'yellow',
//   },
//   label: {
//     marginLeft: 5,
//   },
//   ageInput: {
//     borderWidth: 1,
//     padding: "2%",
//     borderRadius: 8,
//     marginLeft: 10,
//   },
//   ageInputYear: {
//     borderRadius: 8,
//     borderWidth: 1,
//     padding: "2%",
//     // paddingHorizontal: '1%',
//     marginLeft: 10,
//   },
//   buttonSave: {
//     // backgroundColor: "#00BFA6",
//     backgroundColor: "black",
//     paddingHorizontal: "8%",
//     paddingVertical: "4%",
//     marginTop: "5%",
//     marginBottom: "5%",
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: "white",
//     fontWeight: "bold",
//     fontSize: 12,
//   },
//   foot: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: "yellow",
//   },
// });
