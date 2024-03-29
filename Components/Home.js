import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  Button,
  Pressable,
} from "react-native";
import React, { useCallback } from "react";
import style from "../assets/stylesheets/styleHome";
import { useFonts } from "expo-font";
const image = require("../assets/images/header-img.png");

export default function Home({ navigation }) {
  const [fontsLoaded] = useFonts({
    Jua: require("../assets/fonts/Jua-Regular.ttf"),
    Kolker: require("../assets/fonts/KolkerBrush-Regular.ttf"),
  });
  const handleOnLayout = useCallback(async () => {
    if (fontsLoaded) {
      // await SplashScreen.hideAsync(); //hide the splashscreen
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container} onLayout={handleOnLayout}>
      <StatusBar backgroundColor={"whitesmoke"} barStyle={"dark-content"} />
      <View style={styles.head}>
        <Text style={styles.headTexts}>
          Occa<Text style={styles.textHalf}>Link</Text>
        </Text>
      </View>
      <Image source={image} style={styles.image} />
      {/* <Text>Home</Text> */}
      {/* <View> */}
      <Pressable style={styles.btn} onPress={() => navigation.navigate("List")}>
        <Text style={styles.text}>Get Started</Text>
      </Pressable>
      {/* </View> */}
    </View>
  );
}
const styles = StyleSheet.create(style);
