import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import style from "../assets/stylesheets/styleForm";

const image = require("../assets/images/header-img.png");

export default function Form({ navigation }) {
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
              <Text>Enter Name(s):</Text>
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
            <Pressable
              style={styles.buttonSave}
              onPress={() => navigation.navigate("List")}
            >
              <Text style={styles.buttonText}>Save</Text>
            </Pressable>
          </View>
          {/* <View style={styles.head}>
            <Text>&copy;</Text>
          </View> */}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create(style);
