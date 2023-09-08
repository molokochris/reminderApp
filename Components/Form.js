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
          <View style={styles.body} flex={1}>
            <View style={styles.input}>
              <Text>Enter Name(s):</Text>
              <TextInput 
                placeholder="Enter Names"
                style={styles.inputText} />
              <Text>Enter Surname:</Text>
              <TextInput
                placeholder="Surname"
                style={styles.inputText} />
              <TextInput
                placeholder="Description"
                style={styles.inputDescription} />
            </View>
            <View style={styles.ages}>
              <TextInput
                placeholder="DD"
                numberOfLines={1}
                keyboardType="number-pad"
                maxLength={1}
                style={styles.ageInput}
              />
              <Text style={styles.label}>/</Text>
              <TextInput
                placeholder="MM"
                numberOfLines={1}
                keyboardType="number-pad"
                maxLength={1}
                style={styles.ageInput}
              />
              <Text style={styles.label}>/</Text>
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
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create(style);
