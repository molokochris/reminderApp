import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import dateFormat, { masks } from "dateformat";
import style from "../assets/stylesheets/styleForm";

const image = require("../assets/images/header-img.png");

export default function Form(props) {
  const [name, setName] = useState(null);
  const [surname, setSurname] = useState(null);
  const [day, setDay] = useState(dateFormat("dd"));
  const [month, setMonth] = useState(dateFormat("mm"));
  const [year, setYear] = useState(dateFormat("yyyy"));

  // console.log(name);

  const handleSave = () => {
    const newAlert = {
      name,
      surname,
      day,
      month,
      year,
      id: Date.now(),
    };
    // console.log(newAlert);
    console.log(dateFormat("mm,yyyy,dd"));
    props.setAlerts([...props.alerts, newAlert]);
    props.setVisible(false);
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#66BB6A"} style="light" />
      {/* <View style={{ flex: 1, padding: 10 }}>X</View> */}
      <View style={styles.body} flex={1}>
        <Pressable
          style={{
            padding: 20,
            height: 30,
            width: 30,
            borderWidth: 1,
            borderColor: "black",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
          }}
          onPress={() => props.setVisible(false)}
        >
          <Text style={{ fontWeight: "bold" }}>X</Text>
        </Pressable>
        <View style={[styles.input, { flex: 2 }]}>
          <Text>Enter Name(s):</Text>
          <TextInput
            placeholder="Enter Names"
            style={styles.inputText}
            onChangeText={(text) => setName(text)}
          />
          <Text>Enter Surname:</Text>
          <TextInput
            placeholder="Surname"
            style={styles.inputText}
            onChangeText={(text) => setSurname(text)}
          />
          {/* <TextInput
            placeholder="Description"
            style={styles.inputDescription}
          /> */}
        </View>
        <View style={styles.ages}>
          <TextInput
            placeholder="DD"
            numberOfLines={1}
            keyboardType="number-pad"
            maxLength={2}
            value={day}
            style={styles.ageInput}
            onChangeText={(text) => setDay(text)}
          />
          <Text style={styles.label}>/</Text>
          <TextInput
            placeholder="MM"
            numberOfLines={1}
            keyboardType="number-pad"
            maxLength={2}
            value={month}
            style={styles.ageInput}
            onChangeText={(text) => setMonth(text)}
          />
          <Text style={styles.label}>/</Text>
          <TextInput
            placeholder="YYYY"
            numberOfLines={1}
            keyboardType="number-pad"
            maxLength={4}
            value={year}
            style={styles.ageInputYear}
            onChangeText={(text) => setYear(text)}
          />
        </View>
      </View>
      <Pressable style={styles.buttonSave} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create(style);
