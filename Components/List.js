import React, { useEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import styleList from "../assets/stylesheets/styleList";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import bellOn from "../assets/images/on-notif.png";
import bellAdd from "../assets/images/add-notif.png";
import bellMute from "../assets/images/mute-notif.png";
import balloon from "../assets/images/balloon.png";
import add from "../assets/images/add-btn.png";
import { useFonts } from "expo-font";
// import {Icon} from "react-native-vector-icons";
import dateFormat, { masks } from "dateformat";

export default function List() {
  const [fontsLoaded] = useFonts({
    "Jua": require("../assets/fonts/Jua-Regular.ttf"),
    // Kolker: require("../assets/fonts/KolkerBrush-Regular.ttf"),
  });
  // useEffect(() => {
  //   async function loadFont() {
  //     await Font.loadAsync({
  //       Jua: require("../assets/fonts/Jua-Regular.ttf"),
  //       Kolker: require("../assets/fonts/KolkerBrush-Regular.ttf"),
  //     });

  //     // setFontLoaded(true);
  //   }

  //   loadFont();
  // });

  // const now = new Date();
  // const nnow = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
  // const nnow = dateFormat("HH:MM");
  const month = dateFormat("mmm");
  const day = dateFormat("dd");


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#66BB6A"} barStyle={"default"} />
      <View style={styles.addBtn}>
        <Image source={add} style={{ width: 40, height: 40 }} />
      </View>
      <View style={styles.date}>
        <Text style={styles.headText}>{day}</Text>
        <Text style={styles.headText}>{month}</Text>
        {/* <Text style={styles.headText}>AUG</Text> */}
      </View>
      <View style={styles.notifications}>
        <View style={styles.notifBar}>
          <View style={styles.pill}>
            <View style={styles.imgNotif}>
              <Image source={balloon} style={{ width: 30, height: 30 }} />
            </View>
            <View style={styles.numNotif}>
              <Text style={styles.numUpdates}>5</Text>
            </View>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.alerts}>
            <View style={styles.tab}>
              <View style={styles.day}>
                <Text style={styles.textFont}>Today</Text>
              </View>
              <View style={styles.fsNames}>
                <Text style={styles.textFont}>Name & Surname's</Text>
                <Text style={styles.textFont}>Birthday</Text>
              </View>
              <View style={styles.ring}>
                <Image source={bellOn} style={{ width: 35, height: 35 }} />
              </View>
            </View>
            <View style={styles.tab}>
              <View style={styles.day}>
                <Text style={styles.textFont}>Today</Text>
              </View>
              <View style={styles.fsNames}>
                <Text style={styles.textFont}>Name & Surname's</Text>
                <Text style={styles.textFont}>Birthday</Text>
              </View>
              <View style={styles.ring}>
                <Image source={bellAdd} style={{ width: 35, height: 35 }} />
              </View>
            </View>
            <View style={styles.tab}>
              <View style={styles.day}>
                <Text style={styles.textFont}>Today</Text>
              </View>
              <View style={styles.fsNames}>
                <Text style={styles.textFont}>Name & Surname's</Text>
                <Text style={styles.textFont}>Birthday</Text>
              </View>
              <View style={styles.ring}>
                <Image source={bellMute} style={{ width: 35, height: 35 }} />
              </View>
            </View>
            <View style={styles.tab}>
              <View style={styles.day}>
                <Text style={styles.textFont}>Today</Text>
              </View>
              <View style={styles.fsNames}>
                <Text style={styles.textFont}>Name & Surname's</Text>
                <Text style={styles.textFont}>Birthday</Text>
              </View>
              <View style={styles.ring}>
                <Image source={bellMute} style={{ width: 35, height: 35 }} />
              </View>
            </View>
            <View style={styles.tab}>
              <View style={styles.day}>
                <Text style={styles.textFont}>Today</Text>
              </View>
              <View style={styles.fsNames}>
                <Text style={styles.textFont}>Name & Surname's</Text>
                <Text style={styles.textFont}>Birthday</Text>
              </View>
              <View style={styles.ring}>
                <Image source={bellMute} style={{ width: 35, height: 35 }} />
              </View>
            </View>
          </View>
        </ScrollView>
        <View></View>
      </View>
    </View>
  );
}
const styles = styleList;
